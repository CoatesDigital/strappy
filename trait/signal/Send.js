/**
 * @class framework.trait.signal.Send
 * This trait enables a {@link framework.mvc.Model model},
 * {@link framework.mvc.View view} or {@link framework.mvc.Controller controller}
 * with the ability to send signals.
 * 
 * @abstract
 */
 $JSKK.Trait.create
(
	{
		$namespace:	'framework.trait.signal',
		$name:		'Send'
	}
)
(
	{
		/**
		 * This will send a signal to the {@link framework.SignalTower Signal Tower} where
		 * it will be emitted for other components and component entities to receive.
		 * 
		 * @param {String} name The name of the signal.
		 * @param {Object} body The body of the signal. This can contain any kind of data.
		 * @param {String} type The type of the signal. Used for further filtering by type.
		 * @param {Object} filter An extra filter parameter used to filter more abstractly.
		 * @throws Error if the signal name is empty.
		 * @return {Boolean} True if the signal was successfully sent.
		 */
		sendSignal: function(name,body,type,filter)
		{
			console.debug(this.$reflect('namespace')+'.'+this.$reflect('name'),':: sendSignal(trait) :: ',name);
			if (!Object.isEmpty(name))
			{
				return this.getRadioTower().fireEvent
				(
					name,
					new framework.Signal
					(
						{
							name:	name,
							body:	body,
							type:	type,
							filter:	filter
						}
					)
				);
			}
			else
			{
				throw new Error('Class '+this.$reflect('name')+' attempted to fire an empty signal.');
			}
		},
		sendLocalSignal: function()
		{
			
		},
		sendGlobalSignal: function()
		{
			
		}
	}
);