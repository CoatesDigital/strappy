Ext.data.JsonP.framework_trait_signal_Receive({"tagname":"class","name":"framework.trait.signal.Receive","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"nop","inheritable":false,"inheritdoc":null,"meta":{"abstract":true},"id":"class-framework.trait.signal.Receive","members":{"cfg":[],"property":[],"method":[{"name":"registerSignals","tagname":"method","owner":"framework.trait.signal.Receive","meta":{},"id":"method-registerSignals"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"Receive.js","href":"Receive.html#framework-trait-signal-Receive"}],"html_meta":{"abstract":null},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["framework.mvc.Controller","framework.mvc.stateful.Controller"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/framework.mvc.Controller' rel='framework.mvc.Controller' class='docClass'>framework.mvc.Controller</a></div><div class='dependency'><a href='#!/api/framework.mvc.stateful.Controller' rel='framework.mvc.stateful.Controller' class='docClass'>framework.mvc.stateful.Controller</a></div><h4>Files</h4><div class='dependency'><a href='source/Receive.html#framework-trait-signal-Receive' target='_blank'>Receive.js</a></div></pre><div class='doc-contents'><p>This trait enables a <a href=\"#!/api/framework.mvc.Model\" rel=\"framework.mvc.Model\" class=\"docClass\">model</a>,\n<a href=\"#!/api/framework.mvc.View\" rel=\"framework.mvc.View\" class=\"docClass\">view</a> or <a href=\"#!/api/framework.mvc.Controller\" rel=\"framework.mvc.Controller\" class=\"docClass\">controller</a>\nwith the ability to register and receive signals.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-registerSignals' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='framework.trait.signal.Receive'>framework.trait.signal.Receive</span><br/><a href='source/Receive.html#framework-trait-signal-Receive-method-registerSignals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/framework.trait.signal.Receive-method-registerSignals' class='name expandable'>registerSignals</a>( <span class='pre'>Array signals</span> )</div><div class='description'><div class='short'>Registers signals that the class implementing this trait will\nlisten for and binds them to callbacks within the class. ...</div><div class='long'><p>Registers signals that the class implementing this trait will\nlisten for and binds them to callbacks within the class.</p>\n\n<p>Example:</p>\n\n<pre><code>$JSKK.Class.create\n(\n    {\n        $namespace: 'Application.component.myComponent.controller',\n        $name:      'Default',\n        $extends:   framework.mvc.Controller\n    }\n)\n(\n    {},\n    {\n        onReadyState: function()\n        {\n            this.registerSignals\n            (\n                [Application.component.MyComponent.SIGNAL.LOGIN_SUCCESS,'onLoginSuccess'],\n                [Application.component.MyComponent.SIGNAL.LOGIN_FAILURE,'onLoginFailure']\n            );\n        },\n        onLoginSuccess: function(signal)\n        {\n            //Do somthing here...\n        },\n        onLoginFailure: function(signal)\n        {\n            //Do somthing here...\n        }\n    }\n);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>signals</span> : Array<div class='sub-desc'><p>The signals to register.\n@throws Error if the callback to bind to does not exist.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});