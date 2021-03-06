

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../../../../constants');


module.exports = function(Client){
	return Client.sub({
		getAttributeVocabularyValues :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues'
		}),
		getAttributeVocabularyValueLocalizedContents :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent'
		}),
		getAttributeVocabularyValueLocalizedContent :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent/{localeCode}?responseFields={responseFields}'
		}),
		getAttributeVocabularyValue :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}?responseFields={responseFields}'
		}),
		addAttributeVocabularyValueLocalizedContent :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/localizedContent?responseFields={responseFields}'
		}),
		addAttributeVocabularyValue :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues?responseFields={responseFields}'
		}),
		updateAttributeVocabularyValues :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues'
		}),
		updateAttributeVocabularyValueLocalizedContents :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent'
		}),
		updateAttributeVocabularyValueLocalizedContent :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent/{localeCode}?responseFields={responseFields}'
		}),
		updateAttributeVocabularyValue :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}?responseFields={responseFields}'
		}),
		deleteAttributeVocabularyValue :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}'
		}),
		deleteAttributeVocabularyValueLocalizedContent :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent/{localeCode}'
		})	
	});
};
