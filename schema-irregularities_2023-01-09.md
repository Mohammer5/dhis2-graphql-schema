# List of all missing types

## Embeddable types

```
JobParameters
```

## Non-embeddable types

I made three distinctions: Specific simple types, specific non-simple types and
generic types:

### Specific simple types

None found

### Specific non-simple types

```json
[
  "UserCredentialsDto",
  "QueryModifiers",
  "DimensionItemKeywords",
  "Geometry",
  "ValueTypeOptions",
  "PeriodType",
  "DeviceRenderTypeMap",
  "RelativePeriods",
  "DimensionalItemObject",
  "Source",
  "Target",
  "Period",
  "VisualizationFontStyle",
  "ReportingParams",
  "Layout",
  "EventQueryCriteria",
  "OutlierLine",
  "FilterPeriod",
  "EntityQueryCriteria",
  "TrackerDataView",
  "JsonNode",
  "UserInfoSnapshot",
  "StyledObject",
  "AccessData"
]
```

### Generic types

There are three non-specific / generic types: Set, List & Object.

##### Summary of all fields with a generic type

Here is a list with all fields with these types:

```json
[
  'attributeDimension',
  'axes',
  'catDimensionConstraint',
  'catDimensionConstraints',
  'category',
  'categoryCombo',
  'categoryCombos',
  'categoryOption',
  'categoryOptionCombo',
  'categoryOptionGroup',
  'child',
  'cogsDimensionConstraint',
  'cogsDimensionConstraints',
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
  'simpleDimensions',
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
  'userRoles',
  'validationRule',
  'validationRuleGroup',
  'validationRules'
]
```

##### Detailed list of all fields with a generic type

Here is a list with all schemas and their fields for each generic value

```
> The type Set is present in the following schemas/fields:
  > Schema: userRole
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: attribute
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: user
    > Properties: [
        translation, 
        dataViewOrganisationUnit, 
        userGroupAccess, 
        userRole, 
        userGroup, 
        userAccess, 
        cogsDimensionConstraint, 
        catDimensionConstraint, 
        teiSearchOrganisationUnit, 
        organisationUnit
      ]
  > Schema: userGroup
    > Properties: [
        managedByGroup, 
        translation, 
        userGroupAccess, 
        user, 
        managedGroup, 
        userAccess
      ]
  > Schema: externalFileResource
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: expression
    > Properties: [
        translation
      ]
  > Schema: expressionDimensionItem
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: sqlView
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: constant
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: oAuth2Client
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: option
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: jobConfiguration
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: optionSet
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: optionGroup
    > Properties: [
        translation, 
        option, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: optionGroupSet
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: legendSet
    > Properties: [
        userGroupAccess, 
        translation, 
        userAccess
      ]
  > Schema: organisationUnit
    > Properties: [
        child, 
        translation, 
        organisationUnitGroup, 
        userGroupAccess, 
        userItem, 
        userAccess, 
        dataSet, 
        program
      ]
  > Schema: organisationUnitLevel
    > Properties: [
        userGroupAccess, 
        translation, 
        userAccess
      ]
  > Schema: organisationUnitGroup
    > Properties: [
        translation, 
        organisationUnit, 
        userGroupAccess, 
        groupSet, 
        userAccess
      ]
  > Schema: organisationUnitGroupSet
    > Properties: [
        translation, 
        organisationUnitGroup, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: categoryOption
    > Properties: [
        translation, 
        organisationUnit, 
        category, 
        userGroupAccess, 
        categoryOptionCombo, 
        categoryOptionGroup, 
        userAccess
      ]
  > Schema: categoryOptionGroup
    > Properties: [
        translation, 
        categoryOption, 
        userGroupAccess, 
        groupSet, 
        userAccess
      ]
  > Schema: categoryOptionGroupSet
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: category
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: categoryCombo
    > Properties: [
        translation, 
        userGroupAccess, 
        categoryOptionCombo, 
        userAccess
      ]
  > Schema: categoryOptionCombo
    > Properties: [
        translation, 
        categoryOption, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: dataElement
    > Properties: [
        translation, 
        userGroupAccess, 
        dataElementGroup, 
        userAccess
      ]
  > Schema: dataElementGroup
    > Properties: [
        translation, 
        dataElement, 
        userGroupAccess, 
        groupSet, 
        userAccess
      ]
  > Schema: dataElementGroupSet
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: analyticsTableHook
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: indicatorType
    > Properties: [
        userGroupAccess, 
        translation, 
        userAccess
      ]
  > Schema: indicator
    > Properties: [
        translation, 
        userGroupAccess, 
        indicatorGroup, 
        userAccess, 
        dataSet
      ]
  > Schema: indicatorGroup
    > Properties: [
        translation, 
        userGroupAccess, 
        groupSet, 
        indicator, 
        userAccess
      ]
  > Schema: indicatorGroupSet
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: dataEntryForm
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: dataSet
    > Properties: [
        translation, 
        interpretation, 
        userGroupAccess, 
        indicator, 
        section, 
        userAccess, 
        organisationUnit
      ]
  > Schema: dataSetNotificationTemplate
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess, 
        dataSet
      ]
  > Schema: section
    > Properties: [
        translation, 
        categoryCombos, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: dataApprovalLevel
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: dataApprovalWorkflow
    > Properties: [
        dataApprovalLevel, 
        translation, 
        userGroupAccess, 
        userAccess, 
        dataSet
      ]
  > Schema: validationRule
    > Properties: [
        validationRuleGroup, 
        notificationTemplates, 
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: validationRuleGroup
    > Properties: [
        userGroupAccess, 
        validationRule, 
        translation, 
        userAccess
      ]
  > Schema: identifiableObject
    > Properties: [
        recipientUserGroups, 
        translation, 
        userGroupAccess, 
        validationRules, 
        userAccess
      ]
  > Schema: trackedEntityAttribute
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: trackedEntityType
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programTrackedEntityAttributeGroup
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: trackedEntityTypeAttribute
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programNotificationTemplate
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programStageSection
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programStage
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess, 
        notificationTemplate, 
        programStageSection
      ]
  > Schema: smscommand
    > Properties: [
        smsCode, 
        specialCharacter, 
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: program
    > Properties: [
        programIndicator, 
        translation, 
        userGroupAccess, 
        userRole, 
        userAccess, 
        programRuleVariable, 
        notificationTemplate, 
        organisationUnit, 
        programSection, 
        programStage
      ]
  > Schema: eventChart
    > Properties: [
        translation, 
        interpretation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programSection
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programIndicator
    > Properties: [
        translation, 
        programIndicatorGroups, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: relationshipType
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programIndicatorGroup
    > Properties: [
        userGroupAccess, 
        programIndicator, 
        translation, 
        userAccess
      ]
  > Schema: programRuleVariable
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programRuleAction
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programRule
    > Properties: [
        translation, 
        userGroupAccess, 
        programRuleAction, 
        userAccess
      ]
  > Schema: eventReport
    > Properties: [
        translation, 
        interpretation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: aggregateDataExchange
    > Properties: [
        userGroupAccess, 
        translation, 
        userAccess
      ]
  > Schema: mapView
    > Properties: [
        translation, 
        interpretation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: document
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: visualization
    > Properties: [
        translation, 
        interpretation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: externalMapLayer
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: eventVisualization
    > Properties: [
        translation, 
        interpretation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: map
    > Properties: [
        translation, 
        interpretation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: report
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: predictor
    > Properties: [
        organisationUnitLevel, 
        translation, 
        userGroupAccess, 
        predictorGroup, 
        userAccess
      ]
  > Schema: predictorGroup
    > Properties: [
        predictor, 
        userGroupAccess, 
        translation, 
        userAccess
      ]
  > Schema: dashboardItem
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: dashboard
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: pushanalysis
    > Properties: [
        recipientUserGroups, 
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: userCredentialsDto
    > Properties: [
        cogsDimensionConstraints, 
        catDimensionConstraints, 
        userRoles
      ]
  > Schema: interpretationComment
    > Properties: [
        userGroupAccess, 
        translation, 
        userAccess
      ]
  > Schema: legend
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: messageConversation
    > Properties: [
        translation, 
        userMessage, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programStageInstanceFilter
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programDataElement
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: apiToken
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: trackedEntityInstanceFilter
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programStageDataElement
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: reportingRate
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: programInstance
    > Properties: [
        translation, 
        userGroupAccess, 
        programStageInstance, 
        userAccess
      ]
  > Schema: programTrackedEntityAttribute
    > Properties: [
        programTrackedEntityAttributeGroups, 
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: analyticsPeriodBoundary
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: interpretation
    > Properties: [
        likeByUser, 
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: trackedEntityInstance
    > Properties: [
        programOwners, 
        programInstance, 
        translation, 
        userGroupAccess, 
        userAccess, 
        trackedEntityAttributeValue
      ]
  > Schema: programAttributeDimension
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: dataElementOperand
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: softDeletableObject
    > Properties: [
        eventDataValues, 
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: metadataVersion
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]
  > Schema: relationship
    > Properties: [
        translation, 
        userGroupAccess, 
        userAccess
      ]

> The type List is present in the following schemas/fields:
  > Schema: userRole
    > Properties: [
        userObject
      ]
  > Schema: expressionDimensionItem
    > Properties: [
        legendSets
      ]
  > Schema: optionSet
    > Properties: [
        option
      ]
  > Schema: optionGroup
    > Properties: [
        legendSets
      ]
  > Schema: optionGroupSet
    > Properties: [
        optionGroup, 
        item
      ]
  > Schema: organisationUnit
    > Properties: [
        organisationUnit, 
        legendSets
      ]
  > Schema: organisationUnitGroup
    > Properties: [
        legendSets
      ]
  > Schema: organisationUnitGroupSet
    > Properties: [
        item
      ]
  > Schema: categoryOption
    > Properties: [
        legendSets
      ]
  > Schema: categoryOptionGroup
    > Properties: [
        legendSets
      ]
  > Schema: categoryOptionGroupSet
    > Properties: [
        categoryOptionGroup, 
        item
      ]
  > Schema: category
    > Properties: [
        categoryOption, 
        categoryCombo, 
        item
      ]
  > Schema: categoryCombo
    > Properties: [
        category
      ]
  > Schema: categoryOptionCombo
    > Properties: [
        legendSets
      ]
  > Schema: dataElement
    > Properties: [
        legendSets
      ]
  > Schema: dataElementGroup
    > Properties: [
        legendSets
      ]
  > Schema: dataElementGroupSet
    > Properties: [
        dataElementGroup, 
        item
      ]
  > Schema: indicator
    > Properties: [
        legendSets
      ]
  > Schema: indicatorGroupSet
    > Properties: [
        indicatorGroup
      ]
  > Schema: dataSet
    > Properties: [
        legendSets
      ]
  > Schema: section
    > Properties: [
        dataElement, 
        indicator
      ]
  > Schema: validationRule
    > Properties: [
        legendSets
      ]
  > Schema: trackedEntityAttribute
    > Properties: [
        legendSets
      ]
  > Schema: programStageSection
    > Properties: [
        programIndicator, 
        dataElement
      ]
  > Schema: eventChart
    > Properties: [
        attributeDimension, 
        column, 
        dataElementDimension, 
        period, 
        itemOrganisationUnitGroup, 
        programIndicatorDimension, 
        dataDimensionItem, 
        organisationUnit, 
        filter, 
        row
      ]
  > Schema: programSection
    > Properties: [
        trackedEntityAttributes
      ]
  > Schema: programIndicator
    > Properties: [
        legendSets
      ]
  > Schema: eventReport
    > Properties: [
        attributeDimension, 
        itemOrganisationUnitGroup, 
        programIndicatorDimension, 
        dataDimensionItem, 
        column, 
        dataElementDimension, 
        period, 
        organisationUnit, 
        simpleDimensions, 
        filter, 
        row
      ]
  > Schema: mapView
    > Properties: [
        attributeDimension, 
        column, 
        dataElementDimension, 
        period, 
        itemOrganisationUnitGroup, 
        programIndicatorDimension, 
        dataDimensionItem, 
        organisationUnit, 
        filter, 
        row
      ]
  > Schema: visualization
    > Properties: [
        axes, 
        attributeDimension, 
        column, 
        dataElementDimension, 
        period, 
        seriesItem, 
        itemOrganisationUnitGroup, 
        programIndicatorDimension, 
        dataDimensionItem, 
        organisationUnit, 
        filter, 
        row
      ]
  > Schema: eventVisualization
    > Properties: [
        attributeDimension, 
        column, 
        dataElementDimension, 
        period, 
        itemOrganisationUnitGroup, 
        programIndicatorDimension, 
        dataDimensionItem, 
        organisationUnit, 
        simpleDimensions, 
        filter, 
        row
      ]
  > Schema: dashboardItem
    > Properties: [
        report, 
        resource, 
        user
      ]
  > Schema: interpretationComment
    > Properties: [
        mentions
      ]
  > Schema: messageConversation
    > Properties: [
        message
      ]
  > Schema: programDataElement
    > Properties: [
        legendSets
      ]
  > Schema: trackedEntityInstanceFilter
    > Properties: [
        eventFilters
      ]
  > Schema: reportingRate
    > Properties: [
        legendSets
      ]
  > Schema: categoryDimension
    > Properties: [
        categoryOption
      ]
  > Schema: programInstance
    > Properties: [
        messageConversation, 
        trackedEntityComment
      ]
  > Schema: organisationUnitGroupSetDimension
    > Properties: [
        organisationUnitGroup
      ]
  > Schema: categoryOptionGroupSetDimension
    > Properties: [
        categoryOptionGroup
      ]
  > Schema: dataElementGroupSetDimension
    > Properties: [
        dataElementGroup
      ]
  > Schema: interpretation
    > Properties: [
        comment, 
        mentions
      ]
  > Schema: programAttributeDimension
    > Properties: [
        legendSets
      ]
  > Schema: dataElementOperand
    > Properties: [
        legendSets
      ]
  > Schema: softDeletableObject
    > Properties: [
        messageConversations, 
        comments
      ]

> The type Object is present in the following schemas/fields:
  > Schema: mapView
    > Properties: [
        styleDataItem
      ]
```
