// Register a styles definition set named "myCustomStyles".
// Note: Visit CKEditor documentation where style definitions are described in more detailed way.
CKEDITOR.stylesSet.add ('default', [
{ name: 'Inline Tweet', element: 'a', attributes: {'href': '#'} },
/* My Block Styles */
{ name: 'My Div Class', element: 'div', attributes: {'class': 'my-div-class-name'} },
{ name: 'My Div Style', element: 'div', styles: {'padding': '10px 20px', 'background': '#f2f2f2', 'border': '1px solid #ccc'} },
{ name: 'My Div Style 2', element: 'div', styles: {'padding': '10px 20px', 'background': '#f2f2f2', 'border': '1px solid #ccc'} },

/* My Inline Styles */
{ name: 'My Span Class', element: 'span', attributes: {'class': 'my-span-class-name'} },
{ name: 'My Span Class 2', element: 'span', attributes: {'class': 'my-span-class-name'} },
{ name: 'My Span Class 3', element: 'span', attributes: {'class': 'my-span-class-name'} }

]);

CKEDITOR.plugins.add('strinsert',
{
    requires : ['richcombo'],
    init : function( editor )
    {
        var config = editor.config;

        // Gets the list of insertable strings from the settings.
        var strings = config.strinsert_strings;

        // add the menu to the editor
        editor.ui.addRichCombo('strinsert',
        {
            label:      config.strinsert_button_label,
            title:      config.strinsert_button_title,
            voiceLabel: config.strinsert_button_voice,
            toolbar: 'insert',
            className:  'cke_format',
            multiSelect: false,
            panel:
            {
                css: [ editor.config.contentsCss, CKEDITOR.skin.getPath('editor') ],
                voiceLabel: editor.lang.panelVoiceLabel
            },

            init: function()
            {
                var lastgroup = '';
                for(var i=0, len=strings.length; i < len; i++)
                {
                    string = strings[i];
                    // If there is no value, make a group header using the name.
                    if (!string.value) {
                        this.startGroup( string.name );
                    }
                    // If we have a value, we have a string insert row.
                    else {
                        // If no name provided, use the value for the name.
                        if (!string.name) {
                            string.name = string.value;
                        }
                        // If no label provided, use the name for the label.
                        if (!string.label) {
                            string.label = string.name;
                        }
                        this.add(string.value, string.name, string.label);
                    }
                }
            },

            onClick: function( value )
            {
                editor.focus();
                editor.fire( 'saveSnapshot' );
                editor.insertHtml(value);
                editor.fire( 'saveSnapshot' );
            },

        });
    }
});

/**
 * External plugins added through the server-side FieldFactory are automatically registered.
 * Other external plugins (e.g. client-only) may still be registered here (and subsequently added via config.extraPlugins).
 *
 * e.g. if your plugin resides in src/main/resources/VAADIN/js:
 * CKEDITOR.plugins.addExternal("abbr", CKEDITOR.vaadinDirUrl + "js/abbr/");
 */
CKEDITOR.editorConfig = function( config ) {

    // MIRROR info.magnolia.ui.form.field.definition.RichTextFieldDefinition
    definition = {
        alignment: true,
        images: true,
        lists: true,
        source: true,
        tables: true,
        colors: "306ab3,f2950e,ffffff",
        fonts: "Arial;Times New Roman;Verdana;Segoe UI;Tahoma;Open Sans;sans-serif",
        fontSizes: "1.17em;12;14px;16px;20px;24px"
    }

    // MIRROR info.magnolia.ui.form.field.factory.RichTextFieldFactory
    removePlugins = [];

    // CONFIGURATION FROM DEFINITION
    if (!definition.alignment) {
        removePlugins.push("justify");
    }
    if (!definition.images) {
        removePlugins.push("image");
    }
    if (!definition.lists) {
        // In CKEditor 4.1.1 enterkey depends on indent which itself depends on list
        removePlugins.push("enterkey");
        removePlugins.push("indent");
        removePlugins.push("list");
    }
    if (!definition.source) {
        removePlugins.push("sourcearea");
    }
    if (!definition.tables) {
        removePlugins.push("table");
        removePlugins.push("tabletools");
    }

    if (definition.colors != null) {
        config.colorButton_colors = definition.colors;
        config.colorButton_enableMore = false;
        removePlugins.push("colordialog");
    } else {
        removePlugins.push("colorbutton");
        removePlugins.push("colordialog");
    }
    if (definition.fonts != null) {
        config.font_names = definition.fonts;
    } else {
        config.removeButtons = "Font";
    }
    if (definition.fontSizes != null) {
        config.fontSize_sizes = definition.fontSizes;
    } else {
        config.removeButtons = "FontSize";
    }
    if (definition.fonts == null && definition.fontSizes == null) {
        removePlugins.push("font");
        removePlugins.push("fontSize");
    }
    config.format_tags = 'p;h1;h2;h3;h4;h5;h6;pre;address;div';


    config.strinsert_strings =  [
        {'name': 'Stock', 'value': '[stock][/stock]'},
        {'name': 'Fund', 'value': '[fund][/fund]'},
        {'name': 'Group 1'},
        {'name': 'Another name', 'value': 'totally_different', 'label': 'Good looking'},
    ];

    config.strinsert_button_label = 'Insert';
    config.strinsert_button_title = 'Insert content';
    config.strinsert_button_voice = 'Insert content';


    // DEFAULT CONFIGURATION FROM FIELD FACTORY
    removePlugins.push("elementspath");
    removePlugins.push("filebrowser");
    config.removePlugins = removePlugins.join(",");
    config.extraPlugins = "magnolialink,magnoliaFileBrowser,strinsert";
    
    config.baseFloatZIndex = 150;
    config.resize_enabled = false;
    config.toolbar = "Magnolia";
    config.toolbar_Magnolia = [
        { name: "basicstyles",   items: [ "Bold", "Italic", "Underline", "SpecialChar" ] },
        { name: "paragraph",     items: [ "Format","NumberedList", "BulletedList", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "Table" ] },
        { name: "links",         items: [ "Link", "InternalLink", "DamLink", "Unlink" ] },
        { name: "styles",        items: [ "Font", "FontSize", "TextColor" ] },
        { name: "clipboard",     items: [ "Cut", "Copy", "Paste", "PasteText", "PasteFromWord" ] },
        { name: "insert",        items: [ 'strinsert' ] },
        { name: "undo",          items: [ "Undo", "Redo" ] },
        { name: "tools",         items: [ "Source", 'Styles' ] }
    ];
};