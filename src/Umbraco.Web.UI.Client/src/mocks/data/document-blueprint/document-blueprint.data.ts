import {
	DocumentVariantStateModel,
	type DocumentBlueprintItemResponseModel,
	type DocumentBlueprintResponseModel,
	type DocumentBlueprintTreeItemResponseModel,
} from '@umbraco-cms/backoffice/external/backend-api';

export type UmbMockDocumentBlueprintModel = DocumentBlueprintResponseModel &
	DocumentBlueprintItemResponseModel &
	DocumentBlueprintTreeItemResponseModel;

export const data: Array<UmbMockDocumentBlueprintModel> = [
	{
		id: 'the-simplest-document-id',
		documentType: {
			id: 'the-simplest-document-type-id',
			icon: 'icon-document',
		},
		hasChildren: false,
		isFolder: false,
		parent: null,
		name: 'The Simplest Document Blueprint',
		variants: [
			{
				state: DocumentVariantStateModel.DRAFT,
				publishDate: '2023-02-06T15:32:24.957009',
				culture: 'en-us',
				segment: null,
				name: 'The Simplest Document Blueprint',
				createDate: '2023-02-06T15:32:05.350038',
				updateDate: '2023-02-06T15:32:24.957009',
			},
		],
		values: [
			{
				editorAlias: 'Umbraco.TextBox',
				alias: 'prop1',
				culture: null,
				segment: null,
				value: 'my blueprint value',
			},
		],
	},
	{
		id: 'forbidden',
		documentType: {
			id: 'the-simplest-document-type-id',
			icon: 'icon-document',
		},
		hasChildren: false,
		isFolder: false,
		parent: null,
		name: 'A Forbidden Document Blueprint',
		variants: [
			{
				state: DocumentVariantStateModel.DRAFT,
				publishDate: '2023-02-06T15:32:24.957009',
				culture: 'en-US',
				segment: null,
				name: 'A Forbidden Document Blueprint',
				createDate: '2023-02-06T15:32:05.350038',
				updateDate: '2023-02-06T15:32:24.957009',
			},
		],
		values: [
			{
				editorAlias: 'Umbraco.TextBox',
				alias: 'prop1',
				culture: null,
				segment: null,
				value: 'my blueprint value',
			},
		],
	},
];
