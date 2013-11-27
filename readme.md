Installation
====

1. Drop the contents of this folder into the "App_Plugins" folder of an Umbraco V7 instance.
2. Locate the "Developer" section in the Umbraco backoffice.
3. Create a new data type of type "JSON Drop Down List".
4. Point the request URL to your desired JSON file or Web API request
5. Assign the data type to a document type in the "Settings" section of the Umbraco backoffice.
6. Bask in the win that is property editors are in Umbraco v7

What else do I need to know?
====
The demo comes with a JSON file with countries in it. If you're looking for an example of an Umbraco Web API controller. Check out this [gist](https://gist.github.com/jamiepollock/7684166).

For a standard Umbraco installation, this would live at /umbraco/JsonDropDownList/JsonDropDownListApi/[method_name]



Disclaimers
====

This is a very rough and ready demo showing off a property editor with prevalues. 

Were this more than a demo, I would (and probably will and some point) improve the following:

* Validation of the model.value so that if it doesn't exist in the list, it gets selected to the first value
* Add an optional "default value" (eg. "Please select") as a prevalue
* Expand this collection to support radio button & checkbox groups

Contact me
====

If you have any questions regards this demo, give me a shout on twitter [@jamiepollock](http://www.twitter.com/jamiepollock).
