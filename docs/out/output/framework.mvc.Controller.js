Ext.data.JsonP.framework_mvc_Controller({"tagname":"class","name":"framework.mvc.Controller","extends":null,"mixins":["framework.trait.ComponentConnector","framework.trait.signal.Receive","framework.trait.signal.Send"],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":["framework.trait.ComponentConnector","framework.trait.signal.Receive","framework.trait.signal.Send"],"code_type":"nop","inheritable":false,"inheritdoc":null,"meta":{"abstract":true},"id":"class-framework.mvc.Controller","members":{"cfg":[],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"framework.mvc.Controller","meta":{},"id":"method-constructor"},{"name":"getCmp","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getCmp"},{"name":"getCmpName","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getCmpName"},{"name":"getConfig","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getConfig"},{"name":"getID","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getID"},{"name":"getModel","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getModel"},{"name":"getParentComponent","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getParentComponent"},{"name":"getRadioTower","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getRadioTower"},{"name":"getSafeID","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getSafeID"},{"name":"getStateMgr","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getStateMgr"},{"name":"getView","tagname":"method","owner":"framework.trait.ComponentConnector","meta":{},"id":"method-getView"},{"name":"onGotBaseHTML","tagname":"method","owner":"framework.mvc.Controller","meta":{"abstract":true},"id":"method-onGotBaseHTML"},{"name":"onReadyState","tagname":"method","owner":"framework.mvc.Controller","meta":{"abstract":true},"id":"method-onReadyState"},{"name":"onReconfigure","tagname":"method","owner":"framework.mvc.Controller","meta":{"abstract":true},"id":"method-onReconfigure"},{"name":"onViewReady","tagname":"method","owner":"framework.mvc.Controller","meta":{"abstract":true},"id":"method-onViewReady"},{"name":"registerSignals","tagname":"method","owner":"framework.trait.signal.Receive","meta":{},"id":"method-registerSignals"},{"name":"sendSignal","tagname":"method","owner":"framework.trait.signal.Send","meta":{},"id":"method-sendSignal"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"Controller.js","href":"Controller.html#framework-mvc-Controller"}],"html_meta":{"abstract":null},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='docClass'>framework.trait.ComponentConnector</a></div><div class='dependency'><a href='#!/api/framework.trait.signal.Receive' rel='framework.trait.signal.Receive' class='docClass'>framework.trait.signal.Receive</a></div><div class='dependency'><a href='#!/api/framework.trait.signal.Send' rel='framework.trait.signal.Send' class='docClass'>framework.trait.signal.Send</a></div><h4>Uses</h4><div class='dependency'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='docClass'>framework.trait.ComponentConnector</a></div><div class='dependency'><a href='#!/api/framework.trait.signal.Receive' rel='framework.trait.signal.Receive' class='docClass'>framework.trait.signal.Receive</a></div><div class='dependency'><a href='#!/api/framework.trait.signal.Send' rel='framework.trait.signal.Send' class='docClass'>framework.trait.signal.Send</a></div><h4>Files</h4><div class='dependency'><a href='source/Controller.html#framework-mvc-Controller' target='_blank'>Controller.js</a></div></pre><div class='doc-contents'><p>TODO:</p>\n\n<p>Explanation &amp; Examples.</p>\n\n<p>Bound Signals:</p>\n\n<ul>\n<li>framework.Signal.CMP_DO_RECONFIGURE: <a href=\"#!/api/framework.mvc.Controller-method-onReconfigure\" rel=\"framework.mvc.Controller-method-onReconfigure\" class=\"docClass\">onReconfigure</a></li>\n<li>framework.Signal.VIEW_IS_READY: <a href=\"#!/api/framework.mvc.Controller-method-onViewReady\" rel=\"framework.mvc.Controller-method-onViewReady\" class=\"docClass\">onViewReady</a></li>\n<li>framework.Signal.VIEW_DONE_GOTBASEHTML: <a href=\"#!/api/framework.mvc.Controller-method-onGotBaseHTML\" rel=\"framework.mvc.Controller-method-onGotBaseHTML\" class=\"docClass\">onGotBaseHTML</a></li>\n<li>framework.Signal.STATEFULMODEL_IS_READY: <a href=\"#!/api/framework.mvc.Controller-method-onReadyState\" rel=\"framework.mvc.Controller-method-onReadyState\" class=\"docClass\">onReadyState</a></li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='framework.mvc.Controller'>framework.mvc.Controller</span><br/><a href='source/Controller.html#framework-mvc-Controller-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/framework.mvc.Controller-method-constructor' class='name expandable'>framework.mvc.Controller</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Sets up the controller by binding to the above mentioned signals. ...</div><div class='long'><p>Sets up the controller by binding to the above mentioned signals.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/framework.trait.ComponentConnector-method-constructor' rel='framework.trait.ComponentConnector-method-constructor' class='docClass'>framework.trait.ComponentConnector.constructor</a></p></div></div></div><div id='method-getCmp' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getCmp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getCmp' class='name expandable'>getCmp</a>( <span class='pre'>String cmp</span> ) : <a href=\"#!/api/framework.Component\" rel=\"framework.Component\" class=\"docClass\">framework.Component</a></div><div class='description'><div class='short'>Get's a child component of the associated parent component. ...</div><div class='long'><p>Get's a child component of the associated parent component.</p>\n\n<p>NOTE: As a convention, you should only ever call this if you want\nto <a href=\"#!/api/framework.Component-method-configure\" rel=\"framework.Component-method-configure\" class=\"docClass\">configure/reconfigure</a> the\ncomponent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmp</span> : String<div class='sub-desc'><p>The reference name of the component as defined in\nthe parent component.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.Component\" rel=\"framework.Component\" class=\"docClass\">framework.Component</a></span><div class='sub-desc'><p>The child component.</p>\n</div></li></ul></div></div></div><div id='method-getCmpName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getCmpName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getCmpName' class='name expandable'>getCmpName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the name of the parent component associated with the class using\nthis trait. ...</div><div class='long'><p>Returns the name of the parent component associated with the class using\nthis trait.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The name of the parent component.</p>\n</div></li></ul></div></div></div><div id='method-getConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getConfig' class='name expandable'>getConfig</a>( <span class='pre'>String key</span> )</div><div class='description'><div class='short'>Gets the value of a config property. ...</div><div class='long'><p>Gets the value of a config property.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The config property to get.</p>\n</div></li></ul></div></div></div><div id='method-getID' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getID' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getID' class='name expandable'>getID</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the ID of the class which implemented this trait. ...</div><div class='long'><p>Gets the ID of the class which implemented this trait.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The ID.</p>\n</div></li></ul></div></div></div><div id='method-getModel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getModel' class='name expandable'>getModel</a>( <span class='pre'>String model</span> ) : <a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">framework.mvc.Model</a></div><div class='description'><div class='short'>Fetches a model from the parent component. ...</div><div class='long'><p>Fetches a model from the parent component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : String<div class='sub-desc'><p>The name of the model.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">framework.mvc.Model</a></span><div class='sub-desc'><p>The Model instance.</p>\n</div></li></ul></div></div></div><div id='method-getParentComponent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getParentComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getParentComponent' class='name expandable'>getParentComponent</a>( <span class='pre'></span> ) : <a href=\"#!/api/framework.Component\" rel=\"framework.Component\" class=\"docClass\">framework.Component</a></div><div class='description'><div class='short'>Returns the parent component associated with the class using this trait. ...</div><div class='long'><p>Returns the parent component associated with the class using this trait.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.Component\" rel=\"framework.Component\" class=\"docClass\">framework.Component</a></span><div class='sub-desc'><p>the parent component.</p>\n</div></li></ul></div></div></div><div id='method-getRadioTower' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getRadioTower' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getRadioTower' class='name expandable'>getRadioTower</a>( <span class='pre'></span> ) : <a href=\"#!/api/framework.RadioTower\" rel=\"framework.RadioTower\" class=\"docClass\">framework.RadioTower</a></div><div class='description'><div class='short'>Returns the Radio Tower singleton. ...</div><div class='long'><p>Returns the Radio Tower singleton.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.RadioTower\" rel=\"framework.RadioTower\" class=\"docClass\">framework.RadioTower</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSafeID' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getSafeID' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getSafeID' class='name expandable'>getSafeID</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the ID of the class which implemented it and makes it safe\nfor using as a HTML-based ID. ...</div><div class='long'><p>Gets the ID of the class which implemented it and makes it safe\nfor using as a HTML-based ID.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The ID.</p>\n</div></li></ul></div></div></div><div id='method-getStateMgr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getStateMgr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getStateMgr' class='name expandable'>getStateMgr</a>( <span class='pre'></span> ) : <a href=\"#!/api/framework.StateMgr\" rel=\"framework.StateMgr\" class=\"docClass\">framework.StateMgr</a></div><div class='description'><div class='short'>Returns the State Manager singleton. ...</div><div class='long'><p>Returns the State Manager singleton.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.StateMgr\" rel=\"framework.StateMgr\" class=\"docClass\">framework.StateMgr</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getView' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.ComponentConnector' rel='framework.trait.ComponentConnector' class='defined-in docClass'>framework.trait.ComponentConnector</a><br/><a href='source/ComponentConnector.html#framework-trait-ComponentConnector-method-getView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.ComponentConnector-method-getView' class='name expandable'>getView</a>( <span class='pre'>String view</span> ) : <a href=\"#!/api/framework.mvc.View\" rel=\"framework.mvc.View\" class=\"docClass\">framework.mvc.View</a></div><div class='description'><div class='short'>Fetches a view from the parent component. ...</div><div class='long'><p>Fetches a view from the parent component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : String<div class='sub-desc'><p>The name of the view.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/framework.mvc.View\" rel=\"framework.mvc.View\" class=\"docClass\">framework.mvc.View</a></span><div class='sub-desc'><p>The View instance.</p>\n</div></li></ul></div></div></div><div id='method-onGotBaseHTML' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='framework.mvc.Controller'>framework.mvc.Controller</span><br/><a href='source/Controller.html#framework-mvc-Controller-method-onGotBaseHTML' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.mvc.Controller-method-onGotBaseHTML' class='name expandable'>onGotBaseHTML</a>( <span class='pre'><a href=\"#!/api/framework.Signal\" rel=\"framework.Signal\" class=\"docClass\">framework.Signal</a> The</span> )<strong class='abstract signature'>abstract</strong></div><div class='description'><div class='short'>This method will be called when a view fires a Got Base HTML\nsignal. ...</div><div class='long'><p>This method will be called when a view fires a Got Base HTML\nsignal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : <a href=\"#!/api/framework.Signal\" rel=\"framework.Signal\" class=\"docClass\">framework.Signal</a><div class='sub-desc'><p>signal object.</p>\n</div></li></ul></div></div></div><div id='method-onReadyState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='framework.mvc.Controller'>framework.mvc.Controller</span><br/><a href='source/Controller.html#framework-mvc-Controller-method-onReadyState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.mvc.Controller-method-onReadyState' class='name expandable'>onReadyState</a>( <span class='pre'><a href=\"#!/api/framework.Signal\" rel=\"framework.Signal\" class=\"docClass\">framework.Signal</a> The</span> )<strong class='abstract signature'>abstract</strong></div><div class='description'><div class='short'>This method will be called when a state model fires a Stateful Model is Ready\nsignal. ...</div><div class='long'><p>This method will be called when a state model fires a Stateful Model is Ready\nsignal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : <a href=\"#!/api/framework.Signal\" rel=\"framework.Signal\" class=\"docClass\">framework.Signal</a><div class='sub-desc'><p>signal object.</p>\n</div></li></ul></div></div></div><div id='method-onReconfigure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='framework.mvc.Controller'>framework.mvc.Controller</span><br/><a href='source/Controller.html#framework-mvc-Controller-method-onReconfigure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.mvc.Controller-method-onReconfigure' class='name expandable'>onReconfigure</a>( <span class='pre'><a href=\"#!/api/framework.Signal\" rel=\"framework.Signal\" class=\"docClass\">framework.Signal</a> The</span> )<strong class='abstract signature'>abstract</strong></div><div class='description'><div class='short'>This method will be called when a component fires a Do Reconfigure\nsignal. ...</div><div class='long'><p>This method will be called when a component fires a Do Reconfigure\nsignal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : <a href=\"#!/api/framework.Signal\" rel=\"framework.Signal\" class=\"docClass\">framework.Signal</a><div class='sub-desc'><p>signal object.</p>\n</div></li></ul></div></div></div><div id='method-onViewReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='framework.mvc.Controller'>framework.mvc.Controller</span><br/><a href='source/Controller.html#framework-mvc-Controller-method-onViewReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.mvc.Controller-method-onViewReady' class='name expandable'>onViewReady</a>( <span class='pre'><a href=\"#!/api/framework.Signal\" rel=\"framework.Signal\" class=\"docClass\">framework.Signal</a> The</span> )<strong class='abstract signature'>abstract</strong></div><div class='description'><div class='short'>This method will be called when a view fires a ready\nsignal. ...</div><div class='long'><p>This method will be called when a view fires a ready\nsignal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : <a href=\"#!/api/framework.Signal\" rel=\"framework.Signal\" class=\"docClass\">framework.Signal</a><div class='sub-desc'><p>signal object.</p>\n</div></li></ul></div></div></div><div id='method-registerSignals' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.signal.Receive' rel='framework.trait.signal.Receive' class='defined-in docClass'>framework.trait.signal.Receive</a><br/><a href='source/Receive.html#framework-trait-signal-Receive-method-registerSignals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.signal.Receive-method-registerSignals' class='name expandable'>registerSignals</a>( <span class='pre'>Array signals</span> )</div><div class='description'><div class='short'>Registers signals that the class implementing this trait will\nlisten for and binds them to callbacks within the class. ...</div><div class='long'><p>Registers signals that the class implementing this trait will\nlisten for and binds them to callbacks within the class.</p>\n\n<p>Example:</p>\n\n<pre><code>$JSKK.Class.create\n(\n    {\n        $namespace: 'Application.component.myComponent.controller',\n        $name:      'Default',\n        $extends:   framework.mvc.Controller\n    }\n)\n(\n    {},\n    {\n        onReadyState: function()\n        {\n            this.registerSignals\n            (\n                [Application.component.MyComponent.SIGNAL.LOGIN_SUCCESS,'onLoginSuccess'],\n                [Application.component.MyComponent.SIGNAL.LOGIN_FAILURE,'onLoginFailure']\n            );\n        },\n        onLoginSuccess: function(signal)\n        {\n            //Do somthing here...\n        },\n        onLoginFailure: function(signal)\n        {\n            //Do somthing here...\n        }\n    }\n);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>signals</span> : Array<div class='sub-desc'><p>The signals to register.\n@throws Error if the callback to bind to does not exist.</p>\n</div></li></ul></div></div></div><div id='method-sendSignal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/framework.trait.signal.Send' rel='framework.trait.signal.Send' class='defined-in docClass'>framework.trait.signal.Send</a><br/><a href='source/Send.html#framework-trait-signal-Send-method-sendSignal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.signal.Send-method-sendSignal' class='name expandable'>sendSignal</a>( <span class='pre'>String name, Object body, String type, Object filter</span> ) : Boolean</div><div class='description'><div class='short'>This will send a signal to the Signal Tower where\nit will be emitted for other components and component entities to r...</div><div class='long'><p>This will send a signal to the Signal Tower where\nit will be emitted for other components and component entities to receive.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the signal.</p>\n</div></li><li><span class='pre'>body</span> : Object<div class='sub-desc'><p>The body of the signal. This can contain any kind of data.</p>\n</div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The type of the signal. Used for further filtering by type.</p>\n</div></li><li><span class='pre'>filter</span> : Object<div class='sub-desc'><p>An extra filter parameter used to filter more abstractly.\n@throws Error if the signal name is empty.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the signal was successfully sent.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});