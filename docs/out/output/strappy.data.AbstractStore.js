Ext.data.JsonP.strappy_data_AbstractStore({"tagname":"class","name":"strappy.data.AbstractStore","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":["strappy.trait.ComponentConnector","$JSKK.trait.Observable"],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"abstract":true},"private":null,"id":"class-strappy.data.AbstractStore","members":{"cfg":[],"property":[{"name":"data","tagname":"property","owner":"strappy.data.AbstractStore","meta":{"private":true},"id":"property-data"},{"name":"events","tagname":"property","owner":"strappy.data.AbstractStore","meta":{"private":true},"id":"property-events"},{"name":"model","tagname":"property","owner":"strappy.data.AbstractStore","meta":{"private":true},"id":"property-model"},{"name":"proxy","tagname":"property","owner":"strappy.data.AbstractStore","meta":{"private":true},"id":"property-proxy"},{"name":"record","tagname":"property","owner":"strappy.data.AbstractStore","meta":{"private":true},"id":"property-record"}],"method":[{"name":"constructor","tagname":"method","owner":"strappy.data.AbstractStore","meta":{},"id":"method-constructor"},{"name":"get","tagname":"method","owner":"strappy.data.AbstractStore","meta":{},"id":"method-get"},{"name":"getModel","tagname":"method","owner":"strappy.data.AbstractStore","meta":{},"id":"method-getModel"},{"name":"getProxy","tagname":"method","owner":"strappy.data.AbstractStore","meta":{},"id":"method-getProxy"},{"name":"isDirty","tagname":"method","owner":"strappy.data.AbstractStore","meta":{},"id":"method-isDirty"},{"name":"isShared","tagname":"method","owner":"strappy.data.AbstractStore","meta":{},"id":"method-isShared"},{"name":"newRecord","tagname":"method","owner":"strappy.data.AbstractStore","meta":{},"id":"method-newRecord"},{"name":"set","tagname":"method","owner":"strappy.data.AbstractStore","meta":{},"id":"method-set"},{"name":"setProxy","tagname":"method","owner":"strappy.data.AbstractStore","meta":{},"id":"method-setProxy"},{"name":"sync","tagname":"method","owner":"strappy.data.AbstractStore","meta":{},"id":"method-sync"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"AbstractStore.js","href":"AbstractStore.html#strappy-data-AbstractStore"}],"html_meta":{"abstract":null},"component":false,"superclasses":[],"subclasses":["strappy.data.SingleModelStore","strappy.data.MultiModelStore"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/strappy.data.MultiModelStore' rel='strappy.data.MultiModelStore' class='docClass'>strappy.data.MultiModelStore</a></div><div class='dependency'><a href='#!/api/strappy.data.SingleModelStore' rel='strappy.data.SingleModelStore' class='docClass'>strappy.data.SingleModelStore</a></div><h4>Uses</h4><div class='dependency'>$JSKK.trait.Observable</div><div class='dependency'><a href='#!/api/strappy.trait.ComponentConnector' rel='strappy.trait.ComponentConnector' class='docClass'>strappy.trait.ComponentConnector</a></div><h4>Files</h4><div class='dependency'><a href='source/AbstractStore.html#strappy-data-AbstractStore' target='_blank'>AbstractStore.js</a></div></pre><div class='doc-contents'><p>This is the base store of which all other stores extend from.</p>\n\n<p>You should never use this store directly.</p>\n\n<p>@traits strappy.trait.ComponentConnector\n@traits $JSKK.trait.Observable</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-data' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-property-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-property-data' class='name expandable'>data</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>initial record to start the store with. ...</div><div class='long'><p>initial record to start the store with.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-property-events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-property-events' class='name expandable'>events</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>A list of observable events. ...</div><div class='long'><p>A list of observable events.</p>\n<p>Defaults to: <code>{onChange: true, onSync: true, onSyncFailed: true, onModelChange: true, onModelLockChange: true}</code></p><ul><li><span class='pre'>onChange</span> : <div class='sub-desc'><p>Fired whenever anything in the store is changed.</p>\n</div></li><li><span class='pre'>onSync</span> : <div class='sub-desc'><p>Fired whenever the store is synced.</p>\n</div></li><li><span class='pre'>onSyncFailed</span> : <div class='sub-desc'><p>Fired whenever the store is synced and the sync fails.</p>\n</div></li><li><span class='pre'>onModelLockChange</span> : <div class='sub-desc'><p>Fired whenever the lock state of the containing models changes.</p>\n</div></li></ul></div></div></div><div id='property-model' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-property-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-property-model' class='name not-expandable'>model</a><span> : <a href=\"#!/api/strappy.mvc.Model\" rel=\"strappy.mvc.Model\" class=\"docClass\">strappy.mvc.Model</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>A model object which new models will be created from</p>\n</div><div class='long'><p>A model object which new models will be created from</p>\n</div></div></div><div id='property-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-property-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-property-proxy' class='name not-expandable'>proxy</a><span> : <a href=\"#!/api/strappy.data.proxy.AbstractProxy\" rel=\"strappy.data.proxy.AbstractProxy\" class=\"docClass\">strappy.data.proxy.AbstractProxy</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-record' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-property-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-property-record' class='name not-expandable'>record</a><span> : <a href=\"#!/api/strappy.mvc.Model\" rel=\"strappy.mvc.Model\" class=\"docClass\">strappy.mvc.Model</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Represents the model instance.</p>\n</div><div class='long'><p>Represents the model instance.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/strappy.data.AbstractStore-method-constructor' class='name expandable'>strappy.data.AbstractStore</a>( <span class='pre'></span> ) : <a href=\"#!/api/strappy.data.AbstractStore\" rel=\"strappy.data.AbstractStore\" class=\"docClass\">strappy.data.AbstractStore</a></div><div class='description'><div class='short'>Sets up and validates the store. ...</div><div class='long'><p>Sets up and validates the store.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/strappy.data.AbstractStore\" rel=\"strappy.data.AbstractStore\" class=\"docClass\">strappy.data.AbstractStore</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-method-get' class='name expandable'>get</a>( <span class='pre'></span> ) : Mixed</div><div class='description'><div class='short'>Generic getter. ...</div><div class='long'><p>Generic getter.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-method-getModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-method-getModel' class='name expandable'>getModel</a>( <span class='pre'></span> ) : <a href=\"#!/api/strappy.mvc.Model\" rel=\"strappy.mvc.Model\" class=\"docClass\">strappy.mvc.Model</a></div><div class='description'><div class='short'>Returns the attached model (not an instance of it). ...</div><div class='long'><p>Returns the attached model (not an instance of it).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/strappy.mvc.Model\" rel=\"strappy.mvc.Model\" class=\"docClass\">strappy.mvc.Model</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-method-getProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-method-getProxy' class='name expandable'>getProxy</a>( <span class='pre'></span> ) : <a href=\"#!/api/strappy.data.proxy.AbstractProxy\" rel=\"strappy.data.proxy.AbstractProxy\" class=\"docClass\">strappy.data.proxy.AbstractProxy</a></div><div class='description'><div class='short'>Returns the attached proxy. ...</div><div class='long'><p>Returns the attached proxy.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/strappy.data.proxy.AbstractProxy\" rel=\"strappy.data.proxy.AbstractProxy\" class=\"docClass\">strappy.data.proxy.AbstractProxy</a></span><div class='sub-desc'><p>The attached proxy.</p>\n</div></li></ul></div></div></div><div id='method-isDirty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-method-isDirty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-method-isDirty' class='name expandable'>isDirty</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Checks the state of the store to determine weather or not this ...</div><div class='long'><p>Checks the state of the store to determine weather or not this</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the store is dirty.</p>\n</div></li></ul></div></div></div><div id='method-isShared' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-method-isShared' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-method-isShared' class='name expandable'>isShared</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Checks if this store is attached to a shared store. ...</div><div class='long'><p>Checks if this store is attached to a shared store.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the store is a shared store.</p>\n</div></li></ul></div></div></div><div id='method-newRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-method-newRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-method-newRecord' class='name expandable'>newRecord</a>( <span class='pre'>Object record</span> ) : <a href=\"#!/api/strappy.mvc.Model\" rel=\"strappy.mvc.Model\" class=\"docClass\">strappy.mvc.Model</a></div><div class='description'><div class='short'>Creates a new model instance based on the attached model\nand returns it. ...</div><div class='long'><p>Creates a new model instance based on the attached model\nand returns it.</p>\n\n<p>Also binds locking events to the model which handles chaining\nmodel lock change events to the store's onModelLockChange event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'><p>an object representing the model.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/strappy.mvc.Model\" rel=\"strappy.mvc.Model\" class=\"docClass\">strappy.mvc.Model</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-method-set' class='name expandable'>set</a>( <span class='pre'></span> ) : <a href=\"#!/api/strappy.data.AbstractStore\" rel=\"strappy.data.AbstractStore\" class=\"docClass\">strappy.data.AbstractStore</a></div><div class='description'><div class='short'>Generic setter. ...</div><div class='long'><p>Generic setter.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/strappy.data.AbstractStore\" rel=\"strappy.data.AbstractStore\" class=\"docClass\">strappy.data.AbstractStore</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-method-setProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-method-setProxy' class='name expandable'>setProxy</a>( <span class='pre'>Object proxy</span> ) : <a href=\"#!/api/strappy.data.AbstractStore\" rel=\"strappy.data.AbstractStore\" class=\"docClass\">strappy.data.AbstractStore</a></div><div class='description'><div class='short'>Sets a new proxy on the store. ...</div><div class='long'><p>Sets a new proxy on the store.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/strappy.data.AbstractStore\" rel=\"strappy.data.AbstractStore\" class=\"docClass\">strappy.data.AbstractStore</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-sync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='strappy.data.AbstractStore'>strappy.data.AbstractStore</span><br/><a href='source/AbstractStore.html#strappy-data-AbstractStore-method-sync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/strappy.data.AbstractStore-method-sync' class='name expandable'>sync</a>( <span class='pre'></span> ) : <a href=\"#!/api/strappy.data.SingleModelStore\" rel=\"strappy.data.SingleModelStore\" class=\"docClass\">strappy.data.SingleModelStore</a></div><div class='description'><div class='short'>This method will check if the attached model is dirty. ...</div><div class='long'><p>This method will check if the attached model is dirty. If so,\nit will send it to the server. Otherwise it will ignore the model\nand simply request a new one.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/strappy.data.SingleModelStore\" rel=\"strappy.data.SingleModelStore\" class=\"docClass\">strappy.data.SingleModelStore</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});