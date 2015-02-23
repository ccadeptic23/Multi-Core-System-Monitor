//#!/usr/bin/gjs

const Lang = imports.lang;
const Applet = imports.ui.applet;
const GLib = imports.gi.GLib;
const PopupMenu = imports.ui.popupMenu;

function ErrorImportApplet(orientation, msg) {
    this._init(orientation, msg);
}

ErrorImportApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation, msg) {
        Applet.IconApplet.prototype._init.call(this, orientation);

        try {
            
            this.set_applet_icon_name("dialog-info");
            this.set_applet_tooltip(_("Multi-core System Monitor Error."));
            
            this.menuManager = new PopupMenu.PopupMenuManager(this);
            this.menu = new Applet.AppletPopupMenu(this, orientation);
            this.menuManager.addMenu(this.menu);
            
			this.menu_title = new PopupMenu.PopupMenuItem("Multi-core System Monitor Error.");
            this.menu.addMenuItem(this.menu_title);
            
            this.menu_msg = new PopupMenu.PopupMenuItem(msg);
            this.menu.addMenuItem(this.menu_msg);
            
        }
        catch(err) {
            global.logError(err);
        }
     },

    on_applet_clicked: function(event) {
        this.menu.toggle();
    },

};
