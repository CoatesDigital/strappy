$JSKK.Class.create
(
	{
		$namespace:		'framework.data',
		$name:			'Transaction'
	}
)
(
	{
		/**
		 * @property STATE_INIT The Transaction has been initalized but not started.
		 * @static
		 */
		STATE_INIT:			0,
		/**
		 * @property STATE_STARTED The transaction has started.
		 * @static
		 */
		STATE_STARTED:		1,
		/**
		 * @property STATE_COMITTED The transaction has been comitted.
		 * @static
		 */
		STATE_COMITTED:		2,
		/**
		 * @property STATE_COMPLETE The transaction has been comitted.
		 * @static
		 */
		STATE_COMPLETE:		4,
		/**
		 * @property STATE_SUCCESS The transaction was successful.
		 * @static
		 */
		STATE_SUCCESS:		8,
		/**
		 * @property STATE_FAILED The transaction failed.
		 * @static
		 */
		STATE_FAILED:		16,
		/**
		 * @property STATE_FAILED The transaction failed.
		 * @static
		 */
		STATE_ROLLEDBACK:	32
		
	},
	{
		models:		[],
		state:		0,
		lockState:	'full',
//		/**
//		 * 
//		 */
//		init: function()
//		{
//			
//		},
		attachModel: function(model)
		{
			if (Object.isDefined(model)
			&& Object.isFunction(model.$reflect)
			&& (model.$reflect('extends')==framework.mvc.Model))
			{
				model.lock(this.lockState);
				var clone=model.clone();
				model.attachPhantom(clone);
				this.models.push(model);
				return clone;
			}
			else
			{
				throw new Error('Transactions can only be used with Models.');
			}
		},
		/**
		 * Starts the transaction process. Automatically calls {@see framework.Transaction#fullLock}.
		 * @return {framework.Transaction}
		 */
		start: function()
		{
			this.state|=framework.Transaction.STATE_STARTED;
			this.fullLock();
			return this;
		},
		/**
		 * Commits the transaction.
		 * 
		 * @return {framework.Transaction}
		 */
		commit: function()
		{
			this.state|=framework.Transaction.STATE_COMITTED;
			return this;
		},
		/**
		 * 
		 * @return {framework.Transaction}
		 */
		rollback: function()
		{
			this.state|=framework.Transaction.STATE_ROLLEDBACK;
			return this;
		},
		/**
		 * Applies a full lock to the associated models.
		 * 
		 * @return {framework.Transaction}
		 */
		fullLock: function()
		{
			this.lockState='full';
			this.models.each
			(
				function(model)
				{
					model.lock('full');
				}
			);
			return this;
			return this;
		},
		/**
		 * Applies a read-only lock to the associated models.
		 * 
		 * @return {framework.Transaction}
		 */
		readOnly: function()
		{
			this.lockState='readonly';
			this.models.each
			(
				function(model)
				{
					model.lock('readonly');
				}
			);
			return this;
		}
	}
);