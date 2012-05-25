Ext.data.JsonP.framework_data_SingleModelStore({"tagname":"class","name":"framework.data.SingleModelStore","extends":"framework.data.AbstractStore","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"nop","inheritable":false,"inheritdoc":null,"meta":{"abstract":true},"id":"class-framework.data.SingleModelStore","members":{"cfg":[],"property":[{"name":"data","tagname":"property","owner":"framework.data.AbstractStore","meta":{"private":true},"id":"property-data"},{"name":"events","tagname":"property","owner":"framework.data.AbstractStore","meta":{"private":true},"id":"property-events"},{"name":"model","tagname":"property","owner":"framework.data.AbstractStore","meta":{"private":true},"id":"property-model"},{"name":"proxy","tagname":"property","owner":"framework.data.AbstractStore","meta":{"private":true},"id":"property-proxy"},{"name":"record","tagname":"property","owner":"framework.data.AbstractStore","meta":{"private":true},"id":"property-record"}],"method":[{"name":"constructor","tagname":"method","owner":"framework.data.SingleModelStore","meta":{},"id":"method-constructor"},{"name":"get","tagname":"method","owner":"framework.data.SingleModelStore","meta":{},"id":"method-get"},{"name":"getCmp","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getCmp"},{"name":"getCmpName","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getCmpName"},{"name":"getConfig","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getConfig"},{"name":"getController","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getController"},{"name":"getID","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getID"},{"name":"getModel","tagname":"method","owner":"framework.data.AbstractStore","meta":{},"id":"method-getModel"},{"name":"getParentComponent","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getParentComponent"},{"name":"getProxy","tagname":"method","owner":"framework.data.AbstractStore","meta":{},"id":"method-getProxy"},{"name":"getRadioTower","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getRadioTower"},{"name":"getSafeID","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getSafeID"},{"name":"getStateMgr","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getStateMgr"},{"name":"getStore","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getStore"},{"name":"getView","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getView"},{"name":"isDirty","tagname":"method","owner":"framework.data.AbstractStore","meta":{},"id":"method-isDirty"},{"name":"newRecord","tagname":"method","owner":"framework.data.AbstractStore","meta":{},"id":"method-newRecord"},{"name":"set","tagname":"method","owner":"framework.data.SingleModelStore","meta":{},"id":"method-set"},{"name":"setProxy","tagname":"method","owner":"framework.data.AbstractStore","meta":{},"id":"method-setProxy"},{"name":"sync","tagname":"method","owner":"framework.data.SingleModelStore","meta":{},"id":"method-sync"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"SingleModelStore.js","href":"SingleModelStore.html#framework-data-SingleModelStore"}],"html_meta":{"abstract":null},"component":false,"superclasses":["framework.data.AbstractStore"],"subclasses":[],"mixedInto":[],"parentMixins":["framework.trait.ComponentConnector","$JSKK.trait.Observable"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='docClass'>framework.data.AbstractStore</a><div class='subclass '><strong>framework.data.SingleModelStore</strong></div></div><h4>Inherited mixins</h4><div class='dependency'>$JSKK.trait.Observable</div><div class='dependency'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='docClass'>framework.trait.ComponentConnector</a></div><h4>Files</h4><div class='dependency'><a href='source/SingleModelStore.html#framework-data-SingleModelStore' target='_blank'>SingleModelStore.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-data' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='defined-in docClass'>framework.data.AbstractStore</a><br/><a href='source/AbstractStore.html#framework-data-AbstractStore-property-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.AbstractStore-property-data' class='name expandable'>data</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>initial record to start the store with. ...</div><div class='long'><p>initial record to start the store with.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='defined-in docClass'>framework.data.AbstractStore</a><br/><a href='source/AbstractStore.html#framework-data-AbstractStore-property-events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.AbstractStore-property-events' class='name expandable'>events</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>A list of observable events. ...</div><div class='long'><p>A list of observable events.</p>\n<p>Defaults to: <code>{onChange: true, onSync: true, onSyncFailed: true, onModelLockChange: true}</code></p><ul><li><span class='pre'>onChange</span> : <div class='sub-desc'><p>Fired whenever anything in the store is changed.</p>\n</div></li><li><span class='pre'>onSync</span> : <div class='sub-desc'><p>Fired whenever the store is synced.</p>\n</div></li><li><span class='pre'>onSyncFailed</span> : <div class='sub-desc'><p>Fired whenever the store is synced and the sync fails.</p>\n</div></li><li><span class='pre'>onModelLockChange</span> : <div class='sub-desc'><p>Fired whenever the lock state of the containing models changes.</p>\n</div></li></ul></div></div></div><div id='property-model' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='defined-in docClass'>framework.data.AbstractStore</a><br/><a href='source/AbstractStore.html#framework-data-AbstractStore-property-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.AbstractStore-property-model' class='name expandable'>model</a><span> : <a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">framework.mvc.Model</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>A model object which new models will be created from ...</div><div class='long'><p>A model object which new models will be created from</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-proxy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='defined-in docClass'>framework.data.AbstractStore</a><br/><a href='source/AbstractStore.html#framework-data-AbstractStore-property-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.AbstractStore-property-proxy' class='name expandable'>proxy</a><span> : <a href=\"#!/api/framework.data.proxy.AbstractProxy\" rel=\"framework.data.proxy.AbstractProxy\" class=\"docClass\">framework.data.proxy.AbstractProxy</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-record' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='defined-in docClass'>framework.data.AbstractStore</a><br/><a href='source/AbstractStore.html#framework-data-AbstractStore-property-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.AbstractStore-property-record' class='name expandable'>record</a><span> : <a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">framework.mvc.Model</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Represents the model instance. ...</div><div class='long'><p>Represents the model instance.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='framework.data.SingleModelStore'>framework.data.SingleModelStore</span><br/><a href='source/SingleModelStore.html#framework-data-SingleModelStore-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/framework.data.SingleModelStore-method-constructor' class='name expandable'>framework.data.SingleModelStore</a>( <span class='pre'></span> ) : <a href=\"#!/api/framework.data.SingleModelStore\" rel=\"framework.data.SingleModelStore\" class=\"docClass\">framework.data.SingleModelStore</a></div><div class='description'><div class='short'>Sets up and validates the store. ...</div><div class='long'><p>Sets up and validates the store.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.data.SingleModelStore\" rel=\"framework.data.SingleModelStore\" class=\"docClass\">framework.data.SingleModelStore</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/framework.data.AbstractStore-method-constructor' rel='framework.data.AbstractStore-method-constructor' class='docClass'>framework.data.AbstractStore.constructor</a></p></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='framework.data.SingleModelStore'>framework.data.SingleModelStore</span><br/><a href='source/SingleModelStore.html#framework-data-SingleModelStore-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.SingleModelStore-method-get' class='name expandable'>get</a>( <span class='pre'>String field</span> ) : Mixed</div><div class='description'><div class='short'>Gets the value of a given field from the attached model. ...</div><div class='long'><p>Gets the value of a given field from the attached model.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : String<div class='sub-desc'><p>The name of the field to fetch the value of.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The value of the field.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/framework.data.AbstractStore-method-get' rel='framework.data.AbstractStore-method-get' class='docClass'>framework.data.AbstractStore.get</a></p></div></div></div><div id='method-getCmp' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getCmp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getCmp' class='name expandable'>getCmp</a>( <span class='pre'>String cmp</span> ) : <a href=\"#!/api/framework.Component\" rel=\"framework.Component\" class=\"docClass\">framework.Component</a></div><div class='description'><div class='short'>Get's a child component of the associated parent component. ...</div><div class='long'><p>Get's a child component of the associated parent component.</p>\n\n<p>NOTE: As a convention, you should only ever call this if you want\nto <a href=\"#!/api/framework.Component-method-configure\" rel=\"framework.Component-method-configure\" class=\"docClass\">configure/reconfigure</a> the\ncomponent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmp</span> : String<div class='sub-desc'><p>The reference name of the component as defined in\nthe parent component.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.Component\" rel=\"framework.Component\" class=\"docClass\">framework.Component</a></span><div class='sub-desc'><p>The child component.</p>\n</div></li></ul></div></div></div><div id='method-getCmpName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getCmpName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getCmpName' class='name expandable'>getCmpName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the name of the parent component associated with the class using\nthis trait. ...</div><div class='long'><p>Returns the name of the parent component associated with the class using\nthis trait.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The name of the parent component.</p>\n</div></li></ul></div></div></div><div id='method-getConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getConfig' class='name expandable'>getConfig</a>( <span class='pre'>String key</span> )</div><div class='description'><div class='short'>Gets the value of a config property. ...</div><div class='long'><p>Gets the value of a config property.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The config property to get.</p>\n</div></li></ul></div></div></div><div id='method-getController' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getController' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getController' class='name expandable'>getController</a>( <span class='pre'>String controller</span> ) : <a href=\"#!/api/framework.mvc.Controller\" rel=\"framework.mvc.Controller\" class=\"docClass\">framework.mvc.Controller</a></div><div class='description'><div class='short'>Fetches a controller from the parent component. ...</div><div class='long'><p>Fetches a controller from the parent component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>controller</span> : String<div class='sub-desc'><p>The name of the controller.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.mvc.Controller\" rel=\"framework.mvc.Controller\" class=\"docClass\">framework.mvc.Controller</a></span><div class='sub-desc'><p>The Controller instance.</p>\n</div></li></ul></div></div></div><div id='method-getID' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getID' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getID' class='name expandable'>getID</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the ID of the class which implemented this trait. ...</div><div class='long'><p>Gets the ID of the class which implemented this trait.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The ID.</p>\n</div></li></ul></div></div></div><div id='method-getModel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='defined-in docClass'>framework.data.AbstractStore</a><br/><a href='source/AbstractStore.html#framework-data-AbstractStore-method-getModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.AbstractStore-method-getModel' class='name expandable'>getModel</a>( <span class='pre'></span> ) : <a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">framework.mvc.Model</a></div><div class='description'><div class='short'>Returns the attached model (not an instance of it). ...</div><div class='long'><p>Returns the attached model (not an instance of it).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">framework.mvc.Model</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getParentComponent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getParentComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getParentComponent' class='name expandable'>getParentComponent</a>( <span class='pre'></span> ) : <a href=\"#!/api/framework.Component\" rel=\"framework.Component\" class=\"docClass\">framework.Component</a></div><div class='description'><div class='short'>Returns the parent component associated with the class using this trait. ...</div><div class='long'><p>Returns the parent component associated with the class using this trait.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.Component\" rel=\"framework.Component\" class=\"docClass\">framework.Component</a></span><div class='sub-desc'><p>the parent component.</p>\n</div></li></ul></div></div></div><div id='method-getProxy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='defined-in docClass'>framework.data.AbstractStore</a><br/><a href='source/AbstractStore.html#framework-data-AbstractStore-method-getProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.AbstractStore-method-getProxy' class='name expandable'>getProxy</a>( <span class='pre'></span> ) : <a href=\"#!/api/framework.data.proxy.AbstractProxy\" rel=\"framework.data.proxy.AbstractProxy\" class=\"docClass\">framework.data.proxy.AbstractProxy</a></div><div class='description'><div class='short'>Returns the attached proxy. ...</div><div class='long'><p>Returns the attached proxy.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.data.proxy.AbstractProxy\" rel=\"framework.data.proxy.AbstractProxy\" class=\"docClass\">framework.data.proxy.AbstractProxy</a></span><div class='sub-desc'><p>The attached proxy.</p>\n</div></li></ul></div></div></div><div id='method-getRadioTower' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getRadioTower' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getRadioTower' class='name expandable'>getRadioTower</a>( <span class='pre'></span> ) : <a href=\"#!/api/framework.RadioTower\" rel=\"framework.RadioTower\" class=\"docClass\">framework.RadioTower</a></div><div class='description'><div class='short'>Returns the Radio Tower singleton. ...</div><div class='long'><p>Returns the Radio Tower singleton.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.RadioTower\" rel=\"framework.RadioTower\" class=\"docClass\">framework.RadioTower</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSafeID' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getSafeID' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getSafeID' class='name expandable'>getSafeID</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the ID of the class which implemented it and makes it safe\nfor using as a HTML-based ID. ...</div><div class='long'><p>Gets the ID of the class which implemented it and makes it safe\nfor using as a HTML-based ID.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The ID.</p>\n</div></li></ul></div></div></div><div id='method-getStateMgr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getStateMgr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getStateMgr' class='name expandable'>getStateMgr</a>( <span class='pre'></span> ) : <a href=\"#!/api/framework.StateMgr\" rel=\"framework.StateMgr\" class=\"docClass\">framework.StateMgr</a></div><div class='description'><div class='short'>Returns the State Manager singleton. ...</div><div class='long'><p>Returns the State Manager singleton.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.StateMgr\" rel=\"framework.StateMgr\" class=\"docClass\">framework.StateMgr</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStore' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getStore' class='name expandable'>getStore</a>( <span class='pre'>String model</span> ) : <a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">framework.mvc.Model</a></div><div class='description'><div class='short'>Fetches a model from the parent component. ...</div><div class='long'><p>Fetches a model from the parent component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : String<div class='sub-desc'><p>The name of the model.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">framework.mvc.Model</a></span><div class='sub-desc'><p>The Model instance.</p>\n</div></li></ul></div></div></div><div id='method-getView' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getView' class='name expandable'>getView</a>( <span class='pre'>String view</span> ) : <a href=\"#!/api/framework.mvc.View\" rel=\"framework.mvc.View\" class=\"docClass\">framework.mvc.View</a></div><div class='description'><div class='short'>Fetches a view from the parent component. ...</div><div class='long'><p>Fetches a view from the parent component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : String<div class='sub-desc'><p>The name of the view.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.mvc.View\" rel=\"framework.mvc.View\" class=\"docClass\">framework.mvc.View</a></span><div class='sub-desc'><p>The View instance.</p>\n</div></li></ul></div></div></div><div id='method-isDirty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='defined-in docClass'>framework.data.AbstractStore</a><br/><a href='source/AbstractStore.html#framework-data-AbstractStore-method-isDirty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.AbstractStore-method-isDirty' class='name expandable'>isDirty</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Checks the state of the store to determine weather or not this ...</div><div class='long'><p>Checks the state of the store to determine weather or not this</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the store is dirty.</p>\n</div></li></ul></div></div></div><div id='method-newRecord' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='defined-in docClass'>framework.data.AbstractStore</a><br/><a href='source/AbstractStore.html#framework-data-AbstractStore-method-newRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.AbstractStore-method-newRecord' class='name expandable'>newRecord</a>( <span class='pre'>Object record</span> ) : <a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">framework.mvc.Model</a></div><div class='description'><div class='short'>Creates a new model instance based on the attached model\nand returns it. ...</div><div class='long'><p>Creates a new model instance based on the attached model\nand returns it.</p>\n\n<p>Also binds locking events to the model which handles chaining\nmodel lock change events to the store's onModelLockChange event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'><p>an object representing the model.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">framework.mvc.Model</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='framework.data.SingleModelStore'>framework.data.SingleModelStore</span><br/><a href='source/SingleModelStore.html#framework-data-SingleModelStore-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.SingleModelStore-method-set' class='name expandable'>set</a>( <span class='pre'>String field, Mixed value</span> )</div><div class='description'><div class='short'>Sets a value of a given field on the attached model. ...</div><div class='long'><p>Sets a value of a given field on the attached model.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : String<div class='sub-desc'><p>The field to assign a value to.</p>\n</div></li><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to be assigned to the field.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/framework.data.AbstractStore-method-set' rel='framework.data.AbstractStore-method-set' class='docClass'>framework.data.AbstractStore.set</a></p></div></div></div><div id='method-setProxy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.data.AbstractStore' rel='framework.data.AbstractStore' class='defined-in docClass'>framework.data.AbstractStore</a><br/><a href='source/AbstractStore.html#framework-data-AbstractStore-method-setProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.AbstractStore-method-setProxy' class='name expandable'>setProxy</a>( <span class='pre'>Object proxy</span> ) : <a href=\"#!/api/framework.data.AbstractStore\" rel=\"framework.data.AbstractStore\" class=\"docClass\">framework.data.AbstractStore</a></div><div class='description'><div class='short'>Sets a new proxy on the store. ...</div><div class='long'><p>Sets a new proxy on the store.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.data.AbstractStore\" rel=\"framework.data.AbstractStore\" class=\"docClass\">framework.data.AbstractStore</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-sync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='framework.data.SingleModelStore'>framework.data.SingleModelStore</span><br/><a href='source/SingleModelStore.html#framework-data-SingleModelStore-method-sync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.data.SingleModelStore-method-sync' class='name expandable'>sync</a>( <span class='pre'></span> ) : <a href=\"#!/api/framework.data.SingleModelStore\" rel=\"framework.data.SingleModelStore\" class=\"docClass\">framework.data.SingleModelStore</a></div><div class='description'><div class='short'>This method will check if the attached model is dirty. ...</div><div class='long'><p>This method will check if the attached model is dirty. If so,\nit will send it to the server. Otherwise it will ignore the model\nand simply request a new one.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.data.SingleModelStore\" rel=\"framework.data.SingleModelStore\" class=\"docClass\">framework.data.SingleModelStore</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/framework.data.AbstractStore-method-sync' rel='framework.data.AbstractStore-method-sync' class='docClass'>framework.data.AbstractStore.sync</a></p></div></div></div></div></div></div></div>"});