/**
 * @class strappy.data.proxy.BTL
 * @extends strappy.data.proxy.AbstractProxy
 * 
 * Batchable Transmission Layer Proxy
 * 
 * 
 */
$JSKK.Class.create
(
	{
		$namespace:	'strappy.data.proxy',
		$name:		'BTL',
		$extends:	strappy.data.proxy.AbstractProxy
	}
)
(
	{},
	{
		/**
		 * Sends a raw request to the server as JSON.
		 * @param config An object containing configuration for the request. 
		 * @param config.url The url to send the request to.
		 * @param config.data The data which will be converted to a JSON string and sent
		 * with the request.
		 * @return {strappy.data.proxy.BTL} this
		 */
		raw: function(config)
		{
			config.url=this.config.url;
			if (this.fireEvent('onBeforeRequest',this,config)!==false)
			{
				$.ajax
				(
					{
						type:			'POST',
						contentType:	'application/json',
						processData:	false,
						url:			config.url,
						data:			$.stringify(config.data) || {}
					}
				)
				.done(this._onDone.bind(this,config))
				.fail
				(
					function(response)
					{
						console.warn('BTL Proxies raw() method hasn\'t been confiugred to deal with failures.');
//						config.onComplete();
						$application.getController('Dialogue').showDialogue
						(
							{
								title:		'',
								width:		488,
								height:		276,
								buttons:
								[
									{
										text:		'OK',
										cls:		'highlighted',
										handler:	function()
										{
											$application.getController('Dialogue').hideDialogue();
										}.bind(this)
									}
								],
								template:	'Message',
								keyVals:
								{
									message1:	'PROBLEMS!',
									message2:	''
								}
							},
							function(modal) 
							{

							}.bind(this)
						);
					}
				);
			}
			return this;
		},
		_onDone: function(config,response)
		{
			if (response.success)
			{
				(config.onSuccess || $JSKK.emptyFunction)(response);
			}
			else
			{
				(config.onFailure || $JSKK.emptyFunction)(response);
			}
		}
	}
)