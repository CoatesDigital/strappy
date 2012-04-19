Ext.data.JsonP.GettingStarted({"guide":"<h1>Hello World</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/GettingStarted-section-1'>Things to Understand</a></li>\n<li><a href='#!/guide/GettingStarted-section-2'>Environment Setup</a></li>\n</ol>\n</div>\n\n<p><strong>Level:</strong> Beginner</p>\n\n<h2 id='GettingStarted-section-1'>Things to Understand</h2>\n\n<p>This is a component-based framework. Each component can be considered as a stand-alone application. They are self-contained MVC triads which act independently of other components.</p>\n\n<br>\n\n\n<p>This framework has been designed to keep each moving part of a component as isolated as possible. Models, Views, Controllers all communicate through a central signalling mechanism\ncalled a <a href=\"#!/api/framework.RadioTower\" rel=\"framework.RadioTower\" class=\"docClass\">Radio Tower</a> and, with a few exceptions, never directly communicate with one another.</p>\n\n<br>\n\n\n<p>A few exceptions to this rule:</p>\n\n<br>\n\n\n<ul>\n<li>Controllers can directly READ and WRITE to a model.</li>\n<li>Views can directly READ from a modal but CANNOT write.</li>\n</ul>\n\n\n<br>\n\n\n<br>\n\n\n<h2 id='GettingStarted-section-2'>Environment Setup</h2>\n\n<p>You'll need a copy of the framework as well as $JSKK and jQuery. These can be placed and loaded from anywhere within your application but should be loaded in the following order:</p>\n\n<br>\n\n\n<ol>\n<li>$JSKK</li>\n<li>jQuery</li>\n<li>Framework</li>\n</ol>\n\n\n<br>\n\n\n<p>Component namespaces start from the root level of your website index. So for example, if your component was \"Application.component.Main\", your Main.js file would\nbe found at \"/Application/component/Main/Main.js\".</p>\n","title":"Getting Started with Framework"});