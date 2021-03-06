

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../constants');


module.exports = function(Client){
	return Client.sub({
		getReturns :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/returns/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
		}),
		getAvailableReturnActions :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/returns/{returnId}/actions'
		}),
		getReturnItem :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/returns/{returnId}/items/{returnItemId}?responseFields={responseFields}'
		}),
		getReturnItems :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/returns/{returnId}/items?responseFields={responseFields}'
		}),
		getAvailablePaymentActionsForReturn :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/returns/{returnId}/payments/{paymentId}/actions'
		}),
		getPayment :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/returns/{returnId}/payments/{paymentId}?responseFields={responseFields}'
		}),
		getPayments :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/returns/{returnId}/payments?responseFields={responseFields}'
		}),
		getReturn :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/returns/{returnId}?responseFields={responseFields}'
		}),
		createReturn :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/returns/?responseFields={responseFields}'
		}),
		createReturnItem :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/returns/{returnId}/items?responseFields={responseFields}'
		}),
		performPaymentActionForReturn :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/returns/{returnId}/payments/{paymentId}/actions?responseFields={responseFields}'
		}),
		createPaymentActionForReturn :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/returns/{returnId}/payments/actions?responseFields={responseFields}'
		}),
		performReturnActions :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/returns/actions?responseFields={responseFields}'
		}),
		updateReturn :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/returns/{returnId}?responseFields={responseFields}'
		}),
		deleteOrderItem :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/returns/{orderId}/items/{orderItemId}?updatemode={updateMode}&version={version}'
		}),
		deleteReturn :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/returns/{returnId}'
		})	
	});
};
