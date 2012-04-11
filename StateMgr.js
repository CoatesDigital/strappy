$JSKK.Class.create
(
	{
		$namespace:		'framework',
		$name:			'StateMgr',
		$uses:
		[
			framework.trait.signal.Send
		]
	}
)
(
	{},
	{
		state:			{},
		stateString:	'',
		radioTower:		null,
		eventSupported:	false,
		init: function()
		{
			this.radioTower		=framework.$radioTower;
			
			$(window).bind('hashchange',this.onHashChangeTest.bind(this));
			
			this.onHashChange(null,true);
			
			var OLD_HASH=window.location.hash;
			window.location.hash='welcome';
			
			(function()
			{
				//Restore hash.
				window.location.hash=OLD_HASH;
				//Bind the hash change event.
				this.bindHashEvent.defer(200,this);
			}.bind(this)).defer(100);
		},
		onHashChangeTest: function()
		{
			this.eventSupported=true;
		},
		bindHashEvent: function()
		{
			if (this.eventSupported)
			{
				$(window).bind('hashchange',this.onHashChange.bind(this));
			}
			else
			{
				this.monitorHashChange();
			}
//			this.onHashChange.delay(1,this);
		},
		monitorHashChange: function()
		{
			$JSKK.when
			(
				function()
				{
					return (window.location.hash.replace('#','')!=this.stateString);
				}.bind(this)
			).isTrue
			(
				function()
				{
					this.onHashChange();
					this.monitorHashChange();
				}.bind(this)
			);
		},
		onHashChange: function(event,supressSignal)
		{
			console.debug('onHashChange',(supressSignal)?'(supressed)':'');
			this.stateString=window.location.hash.replace('#','');
			if (!Object.isEmpty(this.stateString))
			{
				this.state=this.parseStateString(this.stateString);
			}
			else
			{
				this.state={};
			}
			if (!supressSignal)
			{
				this.sendSignal(framework.Signal.STATE_CHANGE,this.state);
			}
		},
		registerStateChanger: function(el,state)
		{
			state=this.parseStateString(state);
			el.click(this.updateState.bind(this,state));
		},
		updateState: function(state)
		{
			for (var node in state)
			{
				this.state[node]=state[node];
			}
			window.location.hash=this.parseStateObject(this.state);
		},
		getState: function()
		{
			return this.state;
		},
		parseStateString: function(state)
		{
			var	states		=state.split('&'),
				stateParts	=null,
				stateObj	={};
			for (var i=0,j=states.length; i<j; i++)
			{
				stateParts=states[i].split('=');
				if (['true','false'].inArray(stateParts[1]))
				{
					switch (stateParts[1])
					{
						case 'true':	stateParts[1]=true;		break;
						case 'false':	stateParts[1]=false;	break;
					}
				}
				stateObj[stateParts[0]]=stateParts[1];
			}
			return stateObj;
		},
		parseStateObject: function(state)
		{
			var stateString=[];
			for (var node in this.state)
			{
				stateString.push(node+'='+this.state[node]);
			}
			return stateString.join('&');
		},
//		registerStateNote: function()
//		{
//			
//		},
//		registerState: function()
//		{
//			
//		},
		getRadioTower: function()
		{
			return this.radioTower;
		}
	}
);