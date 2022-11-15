{
	"_Name": "MyApplicationMobile",
	"Version": "/MyApplicationMobile/Globals/AppDefinition_Version.global",
	"MainPage": "/MyApplicationMobile/Pages/Books/Books_List.page",
	"OnLaunch": [
		"/MyApplicationMobile/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/MyApplicationMobile/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/MyApplicationMobile/Actions/Service/InitializeOnline.action",
	"Styles": "/MyApplicationMobile/Styles/Styles.less",
	"Localization": "/MyApplicationMobile/i18n/i18n.properties",
	"_SchemaVersion": "6.3"
}