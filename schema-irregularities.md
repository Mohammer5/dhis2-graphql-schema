# List of all missing types

## Embeddable types

```
Access
ObjectStyle
RelationshipConstraint
RelationshipItem
```

## Non-embeddable types

I made three distinctions: Specific simple types, specific non-simple types and
generic types:

### Specific simple types

```
simple:
  Sharing
  JobParameters
  DimensionItemKeywords
  Geometry
  ValueTypeOptions
  PeriodType
  DeviceRenderTypeMap
  DimensionalItemObject
  LegendDefinitions
  SeriesKey
  OutlierAnalysis
  ItemConfig
  Layout
```

### Specific non-simple types

```
non-simple:
  RelativePeriods
  Period
  VisualizationFontStyle
  ReportingParams
  UserInfoSnapshot
  EventQueryCriteria
  FilterPeriod
```

### Generic types

There are three non-specific / generic types: Set, List & Object.

##### Summary of all fields with a generic type

Here is a list with all fields with these types:

```
[
  'attributeDimension',
  'attributes',
  'axes',
  'catDimensionConstraint',
  'category',
  'categoryCombo',
  'categoryCombos',
  'categoryOption',
  'categoryOptionCombo',
  'categoryOptionGroup',
  'child',
  'cogsDimensionConstraint',
  'column',
  'comment',
  'comments',
  'dataApprovalLevel',
  'dataDimensionItem',
  'dataElement',
  'dataElementDimension',
  'dataElementGroup',
  'dataSet',
  'dataViewOrganisationUnit',
  'eventDataValues',
  'eventFilters',
  'filter',
  'groupSet',
  'indicator',
  'indicatorGroup',
  'interpretation',
  'item',
  'itemOrganisationUnitGroup',
  'legendSets',
  'likeByUser',
  'managedByGroup',
  'managedGroup',
  'mentions',
  'message',
  'messageConversation',
  'messageConversations',
  'notificationTemplate',
  'notificationTemplates',
  'option',
  'optionGroup',
  'organisationUnit',
  'organisationUnitGroup',
  'organisationUnitLevel',
  'period',
  'predictor',
  'predictorGroup',
  'program',
  'programIndicator',
  'programIndicatorDimension',
  'programIndicatorGroups',
  'programInstance',
  'programOwners',
  'programRuleAction',
  'programRuleVariable',
  'programSection',
  'programStage',
  'programStageInstance',
  'programStageSection',
  'programTrackedEntityAttributeGroups',
  'recipientUserGroups',
  'report',
  'resource',
  'row',
  'section',
  'seriesItem',
  'smsCode',
  'specialCharacter',
  'styleDataItem',
  'teiSearchOrganisationUnit',
  'trackedEntityAttributes',
  'trackedEntityAttributeValue',
  'trackedEntityComment',
  'translation',
  'user',
  'userAccess',
  'userGroup',
  'userGroupAccess',
  'userItem',
  'userMessage',
  'userObject',
  'userRole',
  'validationRule',
  'validationRuleGroup',
  'validationRules'
]
```

##### Detailed list of all fields with a generic type

Here is a list with all schemas and their fields for each generic value

```
> The type "Set" is present in the following schemas/fields:
  > Schema: userRole
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: attribute
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: user
    > Types: [translation, dataViewOrganisationUnit, userGroupAccess, userGroup, userAccess, teiSearchOrganisationUnit, organisationUnit]
  > Schema: userGroup
    > Types: [managedByGroup, translation, userGroupAccess, user, managedGroup, userAccess]
  > Schema: externalFileResource
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: expression
    > Types: [translation]
  > Schema: sqlView
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: constant
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: oAuth2Client
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: option
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: jobConfiguration
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: optionSet
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: optionGroupSet
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: optionGroup
    > Types: [translation, option, userGroupAccess, userAccess]
  > Schema: legendSet
    > Types: [userGroupAccess, translation, userAccess]
  > Schema: organisationUnit
    > Types: [child, translation, organisationUnitGroup, userGroupAccess, userItem, userAccess, dataSet, program]
  > Schema: organisationUnitLevel
    > Types: [userGroupAccess, translation, userAccess]
  > Schema: organisationUnitGroup
    > Types: [translation, organisationUnit, userGroupAccess, groupSet, userAccess]
  > Schema: organisationUnitGroupSet
    > Types: [translation, organisationUnitGroup, userGroupAccess, userAccess]
  > Schema: categoryOption
    > Types: [translation, category, organisationUnit, userGroupAccess, categoryOptionCombo, categoryOptionGroup, userAccess]
  > Schema: categoryOptionGroup
    > Types: [translation, categoryOption, userGroupAccess, groupSet, userAccess]
  > Schema: categoryOptionGroupSet
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: category
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: categoryCombo
    > Types: [translation, userGroupAccess, categoryOptionCombo, userAccess]
  > Schema: categoryOptionCombo
    > Types: [translation, categoryOption, userGroupAccess, userAccess]
  > Schema: dataElement
    > Types: [translation, userGroupAccess, dataElementGroup, userAccess]
  > Schema: dataElementGroup
    > Types: [translation, dataElement, userGroupAccess, groupSet, userAccess]
  > Schema: dataElementGroupSet
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: indicatorType
    > Types: [userGroupAccess, translation, userAccess]
  > Schema: analyticsTableHook
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: indicator
    > Types: [translation, userGroupAccess, indicatorGroup, userAccess, dataSet]
  > Schema: indicatorGroup
    > Types: [translation, userGroupAccess, indicator, userAccess]
  > Schema: indicatorGroupSet
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: dataEntryForm
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: dataSet
    > Types: [translation, interpretation, userGroupAccess, indicator, section, userAccess, organisationUnit]
  > Schema: dataSetNotificationTemplate
    > Types: [translation, userGroupAccess, userAccess, dataSet]
  > Schema: section
    > Types: [translation, categoryCombos, userGroupAccess, userAccess]
  > Schema: dataApprovalLevel
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: dataApprovalWorkflow
    > Types: [dataApprovalLevel, translation, userGroupAccess, userAccess, dataSet]
  > Schema: validationRule
    > Types: [validationRuleGroup, notificationTemplates, translation, userGroupAccess, userAccess]
  > Schema: validationRuleGroup
    > Types: [userGroupAccess, validationRule, translation, userAccess]
  > Schema: identifiableObject
    > Types: [recipientUserGroups, translation, userGroupAccess, validationRules, userAccess]
  > Schema: trackedEntityAttribute
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: trackedEntityType
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: trackedEntityTypeAttribute
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programTrackedEntityAttributeGroup
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programNotificationTemplate
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programStageSection
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: smscommand
    > Types: [smsCode, specialCharacter, translation, userGroupAccess, userAccess]
  > Schema: programStage
    > Types: [translation, userGroupAccess, userAccess, notificationTemplate, programStageSection]
  > Schema: program
    > Types: [programIndicator, translation, userGroupAccess, userRole, userAccess, programRuleVariable, notificationTemplate, organisationUnit, programSection, programStage]
  > Schema: eventChart
    > Types: [translation, interpretation, userGroupAccess, userAccess]
  > Schema: programSection
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programIndicator
    > Types: [translation, programIndicatorGroups, userGroupAccess, userAccess]
  > Schema: programIndicatorGroup
    > Types: [userGroupAccess, programIndicator, translation, userAccess]
  > Schema: relationshipType
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programRuleVariable
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programRuleAction
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programRule
    > Types: [translation, userGroupAccess, programRuleAction, userAccess]
  > Schema: eventReport
    > Types: [translation, interpretation, userGroupAccess, userAccess]
  > Schema: mapView
    > Types: [translation, interpretation, userGroupAccess, userAccess]
  > Schema: externalMapLayer
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: visualization
    > Types: [translation, interpretation, userGroupAccess, userAccess]
  > Schema: document
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: map
    > Types: [translation, interpretation, userGroupAccess, userAccess]
  > Schema: report
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: Predictor
    > Types: [organisationUnitLevel, translation, userGroupAccess, predictorGroup, userAccess]
  > Schema: predictorGroup
    > Types: [predictor, userGroupAccess, translation, userAccess]
  > Schema: dashboardItem
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: dashboard
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: pushanalysis
    > Types: [recipientUserGroups, translation, userGroupAccess, userAccess]
  > Schema: trackedEntityInstance
    > Types: [programOwners, programInstance, translation, userGroupAccess, userAccess, trackedEntityAttributeValue]
  > Schema: dataElementOperand
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: softDeletableObject
    > Types: [eventDataValues, translation, userGroupAccess, userAccess]
  > Schema: programDataElement
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programInstance
    > Types: [translation, userGroupAccess, programStageInstance, userAccess]
  > Schema: programStageDataElement
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: metadataVersion
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: analyticsPeriodBoundary
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programTrackedEntityAttribute
    > Types: [programTrackedEntityAttributeGroups, translation, userGroupAccess, userAccess]
  > Schema: messageConversation
    > Types: [translation, userMessage, userGroupAccess, userAccess]
  > Schema: apiToken
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programStageInstanceFilter
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: trackedEntityInstanceFilter
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: relationship
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: interpretationComment
    > Types: [userGroupAccess, translation, userAccess]
  > Schema: reportingRate
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: programAttributeDimension
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: userCredentials
    > Types: [cogsDimensionConstraint, catDimensionConstraint, translation, userGroupAccess, userRole, userAccess]
  > Schema: legend
    > Types: [translation, userGroupAccess, userAccess]
  > Schema: interpretation
    > Types: [likeByUser, translation, userGroupAccess, userAccess]

> The type "List" is present in the following schemas/fields:
  > Schema: userRole
    > Types: [userObject]
  > Schema: optionSet
    > Types: [option]
  > Schema: optionGroupSet
    > Types: [optionGroup, item]
  > Schema: optionGroup
    > Types: [legendSets]
  > Schema: organisationUnit
    > Types: [organisationUnit, legendSets]
  > Schema: organisationUnitGroup
    > Types: [legendSets]
  > Schema: organisationUnitGroupSet
    > Types: [item]
  > Schema: categoryOption
    > Types: [legendSets]
  > Schema: categoryOptionGroup
    > Types: [legendSets]
  > Schema: categoryOptionGroupSet
    > Types: [categoryOptionGroup, item]
  > Schema: category
    > Types: [categoryCombo, categoryOption, item]
  > Schema: categoryCombo
    > Types: [category]
  > Schema: categoryOptionCombo
    > Types: [legendSets]
  > Schema: dataElement
    > Types: [legendSets]
  > Schema: dataElementGroup
    > Types: [legendSets]
  > Schema: dataElementGroupSet
    > Types: [dataElementGroup, item]
  > Schema: indicator
    > Types: [legendSets]
  > Schema: indicatorGroupSet
    > Types: [indicatorGroup]
  > Schema: dataSet
    > Types: [legendSets]
  > Schema: section
    > Types: [dataElement, indicator]
  > Schema: validationRule
    > Types: [legendSets]
  > Schema: trackedEntityAttribute
    > Types: [legendSets]
  > Schema: programStageSection
    > Types: [programIndicator, dataElement]
  > Schema: eventChart
    > Types: [attributeDimension, column, dataElementDimension, period, itemOrganisationUnitGroup, programIndicatorDimension, dataDimensionItem, organisationUnit, filter, row]
  > Schema: programSection
    > Types: [trackedEntityAttributes]
  > Schema: programIndicator
    > Types: [legendSets]
  > Schema: eventReport
    > Types: [attributeDimension, itemOrganisationUnitGroup, programIndicatorDimension, dataDimensionItem, column, dataElementDimension, period, organisationUnit, filter, row]
  > Schema: mapView
    > Types: [attributeDimension, column, dataElementDimension, period, itemOrganisationUnitGroup, programIndicatorDimension, dataDimensionItem, organisationUnit, filter, row]
  > Schema: visualization
    > Types: [axes, attributeDimension, column, dataElementDimension, period, seriesItem, itemOrganisationUnitGroup, programIndicatorDimension, dataDimensionItem, organisationUnit, filter, row]
  > Schema: dashboardItem
    > Types: [report, resource, user]
  > Schema: categoryDimension
    > Types: [categoryOption]
  > Schema: dataElementOperand
    > Types: [legendSets]
  > Schema: softDeletableObject
    > Types: [messageConversations, comments]
  > Schema: categoryOptionGroupSetDimension
    > Types: [categoryOptionGroup]
  > Schema: programDataElement
    > Types: [legendSets]
  > Schema: programInstance
    > Types: [messageConversation, trackedEntityComment]
  > Schema: dataElementGroupSetDimension
    > Types: [dataElementGroup]
  > Schema: messageConversation
    > Types: [message]
  > Schema: apiToken
    > Types: [attributes]
  > Schema: trackedEntityInstanceFilter
    > Types: [eventFilters]
  > Schema: interpretationComment
    > Types: [mentions]
  > Schema: organisationUnitGroupSetDimension
    > Types: [organisationUnitGroup]
  > Schema: reportingRate
    > Types: [legendSets]
  > Schema: programAttributeDimension
    > Types: [legendSets]
  > Schema: interpretation
    > Types: [comment, mentions]

> The type "Object" is present in the following schemas/fields:
  > Schema: mapView
    > Types: [styleDataItem]
```
