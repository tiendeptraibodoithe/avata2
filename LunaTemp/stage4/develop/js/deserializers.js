var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3934 = root || request.c( 'UnityEngine.JointSpring' )
  var i3935 = data
  i3934.spring = i3935[0]
  i3934.damper = i3935[1]
  i3934.targetPosition = i3935[2]
  return i3934
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3936 = root || request.c( 'UnityEngine.JointMotor' )
  var i3937 = data
  i3936.m_TargetVelocity = i3937[0]
  i3936.m_Force = i3937[1]
  i3936.m_FreeSpin = i3937[2]
  return i3936
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3938 = root || request.c( 'UnityEngine.JointLimits' )
  var i3939 = data
  i3938.m_Min = i3939[0]
  i3938.m_Max = i3939[1]
  i3938.m_Bounciness = i3939[2]
  i3938.m_BounceMinVelocity = i3939[3]
  i3938.m_ContactDistance = i3939[4]
  i3938.minBounce = i3939[5]
  i3938.maxBounce = i3939[6]
  return i3938
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3940 = root || request.c( 'UnityEngine.JointDrive' )
  var i3941 = data
  i3940.m_PositionSpring = i3941[0]
  i3940.m_PositionDamper = i3941[1]
  i3940.m_MaximumForce = i3941[2]
  return i3940
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3942 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3943 = data
  i3942.m_Spring = i3943[0]
  i3942.m_Damper = i3943[1]
  return i3942
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3944 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3945 = data
  i3944.m_Limit = i3945[0]
  i3944.m_Bounciness = i3945[1]
  i3944.m_ContactDistance = i3945[2]
  return i3944
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3946 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3947 = data
  i3946.m_ExtremumSlip = i3947[0]
  i3946.m_ExtremumValue = i3947[1]
  i3946.m_AsymptoteSlip = i3947[2]
  i3946.m_AsymptoteValue = i3947[3]
  i3946.m_Stiffness = i3947[4]
  return i3946
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3948 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3949 = data
  i3948.m_LowerAngle = i3949[0]
  i3948.m_UpperAngle = i3949[1]
  return i3948
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3950 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3951 = data
  i3950.m_MotorSpeed = i3951[0]
  i3950.m_MaximumMotorTorque = i3951[1]
  return i3950
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3952 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3953 = data
  i3952.m_DampingRatio = i3953[0]
  i3952.m_Frequency = i3953[1]
  i3952.m_Angle = i3953[2]
  return i3952
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3954 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3955 = data
  i3954.m_LowerTranslation = i3955[0]
  i3954.m_UpperTranslation = i3955[1]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3957 = data
  i3956.position = new pc.Vec3( i3957[0], i3957[1], i3957[2] )
  i3956.scale = new pc.Vec3( i3957[3], i3957[4], i3957[5] )
  i3956.rotation = new pc.Quat(i3957[6], i3957[7], i3957[8], i3957[9])
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3959 = data
  i3958.pivot = new pc.Vec2( i3959[0], i3959[1] )
  i3958.anchorMin = new pc.Vec2( i3959[2], i3959[3] )
  i3958.anchorMax = new pc.Vec2( i3959[4], i3959[5] )
  i3958.sizeDelta = new pc.Vec2( i3959[6], i3959[7] )
  i3958.anchoredPosition3D = new pc.Vec3( i3959[8], i3959[9], i3959[10] )
  i3958.rotation = new pc.Quat(i3959[11], i3959[12], i3959[13], i3959[14])
  i3958.scale = new pc.Vec3( i3959[15], i3959[16], i3959[17] )
  return i3958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3961 = data
  i3960.planeDistance = i3961[0]
  i3960.referencePixelsPerUnit = i3961[1]
  i3960.isFallbackOverlay = !!i3961[2]
  i3960.renderMode = i3961[3]
  i3960.renderOrder = i3961[4]
  i3960.sortingLayerName = i3961[5]
  i3960.sortingOrder = i3961[6]
  i3960.scaleFactor = i3961[7]
  request.r(i3961[8], i3961[9], 0, i3960, 'worldCamera')
  i3960.overrideSorting = !!i3961[10]
  i3960.pixelPerfect = !!i3961[11]
  i3960.targetDisplay = i3961[12]
  i3960.overridePixelPerfect = !!i3961[13]
  i3960.enabled = !!i3961[14]
  return i3960
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3962 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3963 = data
  i3962.m_UiScaleMode = i3963[0]
  i3962.m_ReferencePixelsPerUnit = i3963[1]
  i3962.m_ScaleFactor = i3963[2]
  i3962.m_ReferenceResolution = new pc.Vec2( i3963[3], i3963[4] )
  i3962.m_ScreenMatchMode = i3963[5]
  i3962.m_MatchWidthOrHeight = i3963[6]
  i3962.m_PhysicalUnit = i3963[7]
  i3962.m_FallbackScreenDPI = i3963[8]
  i3962.m_DefaultSpriteDPI = i3963[9]
  i3962.m_DynamicPixelsPerUnit = i3963[10]
  i3962.m_PresetInfoIsWorld = !!i3963[11]
  return i3962
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3964 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3965 = data
  i3964.m_IgnoreReversedGraphics = !!i3965[0]
  i3964.m_BlockingObjects = i3965[1]
  i3964.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3965[2] )
  return i3964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3967 = data
  i3966.cullTransparentMesh = !!i3967[0]
  return i3966
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3968 = root || request.c( 'UnityEngine.UI.Image' )
  var i3969 = data
  request.r(i3969[0], i3969[1], 0, i3968, 'm_Sprite')
  i3968.m_Type = i3969[2]
  i3968.m_PreserveAspect = !!i3969[3]
  i3968.m_FillCenter = !!i3969[4]
  i3968.m_FillMethod = i3969[5]
  i3968.m_FillAmount = i3969[6]
  i3968.m_FillClockwise = !!i3969[7]
  i3968.m_FillOrigin = i3969[8]
  i3968.m_UseSpriteMesh = !!i3969[9]
  i3968.m_PixelsPerUnitMultiplier = i3969[10]
  request.r(i3969[11], i3969[12], 0, i3968, 'm_Material')
  i3968.m_Maskable = !!i3969[13]
  i3968.m_Color = new pc.Color(i3969[14], i3969[15], i3969[16], i3969[17])
  i3968.m_RaycastTarget = !!i3969[18]
  i3968.m_RaycastPadding = new pc.Vec4( i3969[19], i3969[20], i3969[21], i3969[22] )
  return i3968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3971 = data
  i3970.name = i3971[0]
  i3970.tagId = i3971[1]
  i3970.enabled = !!i3971[2]
  i3970.isStatic = !!i3971[3]
  i3970.layer = i3971[4]
  return i3970
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3972 = root || request.c( 'UnityEngine.UI.Button' )
  var i3973 = data
  i3972.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3973[0], i3972.m_OnClick)
  i3972.m_Navigation = request.d('UnityEngine.UI.Navigation', i3973[1], i3972.m_Navigation)
  i3972.m_Transition = i3973[2]
  i3972.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3973[3], i3972.m_Colors)
  i3972.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3973[4], i3972.m_SpriteState)
  i3972.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3973[5], i3972.m_AnimationTriggers)
  i3972.m_Interactable = !!i3973[6]
  request.r(i3973[7], i3973[8], 0, i3972, 'm_TargetGraphic')
  return i3972
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3974 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3975 = data
  i3974.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3975[0], i3974.m_PersistentCalls)
  return i3974
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3976 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3977 = data
  var i3979 = i3977[0]
  var i3978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3979.length; i += 1) {
    i3978.add(request.d('UnityEngine.Events.PersistentCall', i3979[i + 0]));
  }
  i3976.m_Calls = i3978
  return i3976
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3982 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3983 = data
  request.r(i3983[0], i3983[1], 0, i3982, 'm_Target')
  i3982.m_TargetAssemblyTypeName = i3983[2]
  i3982.m_MethodName = i3983[3]
  i3982.m_Mode = i3983[4]
  i3982.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3983[5], i3982.m_Arguments)
  i3982.m_CallState = i3983[6]
  return i3982
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3984 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3985 = data
  i3984.m_Mode = i3985[0]
  i3984.m_WrapAround = !!i3985[1]
  request.r(i3985[2], i3985[3], 0, i3984, 'm_SelectOnUp')
  request.r(i3985[4], i3985[5], 0, i3984, 'm_SelectOnDown')
  request.r(i3985[6], i3985[7], 0, i3984, 'm_SelectOnLeft')
  request.r(i3985[8], i3985[9], 0, i3984, 'm_SelectOnRight')
  return i3984
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3986 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3987 = data
  i3986.m_NormalColor = new pc.Color(i3987[0], i3987[1], i3987[2], i3987[3])
  i3986.m_HighlightedColor = new pc.Color(i3987[4], i3987[5], i3987[6], i3987[7])
  i3986.m_PressedColor = new pc.Color(i3987[8], i3987[9], i3987[10], i3987[11])
  i3986.m_SelectedColor = new pc.Color(i3987[12], i3987[13], i3987[14], i3987[15])
  i3986.m_DisabledColor = new pc.Color(i3987[16], i3987[17], i3987[18], i3987[19])
  i3986.m_ColorMultiplier = i3987[20]
  i3986.m_FadeDuration = i3987[21]
  return i3986
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3988 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3989 = data
  request.r(i3989[0], i3989[1], 0, i3988, 'm_HighlightedSprite')
  request.r(i3989[2], i3989[3], 0, i3988, 'm_PressedSprite')
  request.r(i3989[4], i3989[5], 0, i3988, 'm_SelectedSprite')
  request.r(i3989[6], i3989[7], 0, i3988, 'm_DisabledSprite')
  return i3988
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3990 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3991 = data
  i3990.m_NormalTrigger = i3991[0]
  i3990.m_HighlightedTrigger = i3991[1]
  i3990.m_PressedTrigger = i3991[2]
  i3990.m_SelectedTrigger = i3991[3]
  i3990.m_DisabledTrigger = i3991[4]
  return i3990
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3992 = root || request.c( 'UnityEngine.UI.Text' )
  var i3993 = data
  i3992.m_FontData = request.d('UnityEngine.UI.FontData', i3993[0], i3992.m_FontData)
  i3992.m_Text = i3993[1]
  request.r(i3993[2], i3993[3], 0, i3992, 'm_Material')
  i3992.m_Maskable = !!i3993[4]
  i3992.m_Color = new pc.Color(i3993[5], i3993[6], i3993[7], i3993[8])
  i3992.m_RaycastTarget = !!i3993[9]
  i3992.m_RaycastPadding = new pc.Vec4( i3993[10], i3993[11], i3993[12], i3993[13] )
  return i3992
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3994 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3995 = data
  request.r(i3995[0], i3995[1], 0, i3994, 'm_Font')
  i3994.m_FontSize = i3995[2]
  i3994.m_FontStyle = i3995[3]
  i3994.m_BestFit = !!i3995[4]
  i3994.m_MinSize = i3995[5]
  i3994.m_MaxSize = i3995[6]
  i3994.m_Alignment = i3995[7]
  i3994.m_AlignByGeometry = !!i3995[8]
  i3994.m_RichText = !!i3995[9]
  i3994.m_HorizontalOverflow = i3995[10]
  i3994.m_VerticalOverflow = i3995[11]
  i3994.m_LineSpacing = i3995[12]
  return i3994
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3996 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3997 = data
  request.r(i3997[0], i3997[1], 0, i3996, 'm_ObjectArgument')
  i3996.m_ObjectArgumentAssemblyTypeName = i3997[2]
  i3996.m_IntArgument = i3997[3]
  i3996.m_FloatArgument = i3997[4]
  i3996.m_StringArgument = i3997[5]
  i3996.m_BoolArgument = !!i3997[6]
  return i3996
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3998 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3999 = data
  i3998.m_ShowMaskGraphic = !!i3999[0]
  return i3998
}

Deserializers["InfiniteScroller"] = function (request, data, root) {
  var i4000 = root || request.c( 'InfiniteScroller' )
  var i4001 = data
  var i4003 = i4001[0]
  var i4002 = []
  for(var i = 0; i < i4003.length; i += 2) {
  request.r(i4003[i + 0], i4003[i + 1], 2, i4002, '')
  }
  i4000.items = i4002
  i4000.itemSpacing = i4001[1]
  i4000.decelerationRate = i4001[2]
  i4000.dragSensitivity = i4001[3]
  return i4000
}

Deserializers["SkinItemController"] = function (request, data, root) {
  var i4006 = root || request.c( 'SkinItemController' )
  var i4007 = data
  i4006.skinType = i4007[0]
  request.r(i4007[1], i4007[2], 0, i4006, 'skinData')
  request.r(i4007[3], i4007[4], 0, i4006, 'thumbnailImage')
  request.r(i4007[5], i4007[6], 0, i4006, 'selectionBorder')
  request.r(i4007[7], i4007[8], 0, i4006, 'skinMixer')
  return i4006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4009 = data
  i4008.name = i4009[0]
  i4008.width = i4009[1]
  i4008.height = i4009[2]
  i4008.mipmapCount = i4009[3]
  i4008.anisoLevel = i4009[4]
  i4008.filterMode = i4009[5]
  i4008.hdr = !!i4009[6]
  i4008.format = i4009[7]
  i4008.wrapMode = i4009[8]
  i4008.alphaIsTransparency = !!i4009[9]
  i4008.alphaSource = i4009[10]
  i4008.graphicsFormat = i4009[11]
  i4008.sRGBTexture = !!i4009[12]
  i4008.desiredColorSpace = i4009[13]
  i4008.wrapU = i4009[14]
  i4008.wrapV = i4009[15]
  return i4008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4010 = root || new pc.UnityMaterial()
  var i4011 = data
  i4010.name = i4011[0]
  request.r(i4011[1], i4011[2], 0, i4010, 'shader')
  i4010.renderQueue = i4011[3]
  i4010.enableInstancing = !!i4011[4]
  var i4013 = i4011[5]
  var i4012 = []
  for(var i = 0; i < i4013.length; i += 1) {
    i4012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4013[i + 0]) );
  }
  i4010.floatParameters = i4012
  var i4015 = i4011[6]
  var i4014 = []
  for(var i = 0; i < i4015.length; i += 1) {
    i4014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4015[i + 0]) );
  }
  i4010.colorParameters = i4014
  var i4017 = i4011[7]
  var i4016 = []
  for(var i = 0; i < i4017.length; i += 1) {
    i4016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4017[i + 0]) );
  }
  i4010.vectorParameters = i4016
  var i4019 = i4011[8]
  var i4018 = []
  for(var i = 0; i < i4019.length; i += 1) {
    i4018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4019[i + 0]) );
  }
  i4010.textureParameters = i4018
  var i4021 = i4011[9]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 1) {
    i4020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4021[i + 0]) );
  }
  i4010.materialFlags = i4020
  return i4010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4025 = data
  i4024.name = i4025[0]
  i4024.value = i4025[1]
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4029 = data
  i4028.name = i4029[0]
  i4028.value = new pc.Color(i4029[1], i4029[2], i4029[3], i4029[4])
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4033 = data
  i4032.name = i4033[0]
  i4032.value = new pc.Vec4( i4033[1], i4033[2], i4033[3], i4033[4] )
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4037 = data
  i4036.name = i4037[0]
  request.r(i4037[1], i4037[2], 0, i4036, 'value')
  return i4036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4041 = data
  i4040.name = i4041[0]
  i4040.enabled = !!i4041[1]
  return i4040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4043 = data
  i4042.name = i4043[0]
  i4042.halfPrecision = !!i4043[1]
  i4042.useSimplification = !!i4043[2]
  i4042.useUInt32IndexFormat = !!i4043[3]
  i4042.vertexCount = i4043[4]
  i4042.aabb = i4043[5]
  var i4045 = i4043[6]
  var i4044 = []
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.push( !!i4045[i + 0] );
  }
  i4042.streams = i4044
  i4042.vertices = i4043[7]
  var i4047 = i4043[8]
  var i4046 = []
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4047[i + 0]) );
  }
  i4042.subMeshes = i4046
  var i4049 = i4043[9]
  var i4048 = []
  for(var i = 0; i < i4049.length; i += 16) {
    i4048.push( new pc.Mat4().setData(i4049[i + 0], i4049[i + 1], i4049[i + 2], i4049[i + 3],  i4049[i + 4], i4049[i + 5], i4049[i + 6], i4049[i + 7],  i4049[i + 8], i4049[i + 9], i4049[i + 10], i4049[i + 11],  i4049[i + 12], i4049[i + 13], i4049[i + 14], i4049[i + 15]) );
  }
  i4042.bindposes = i4048
  var i4051 = i4043[10]
  var i4050 = []
  for(var i = 0; i < i4051.length; i += 1) {
    i4050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4051[i + 0]) );
  }
  i4042.blendShapes = i4050
  return i4042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4057 = data
  i4056.triangles = i4057[0]
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4063 = data
  i4062.name = i4063[0]
  var i4065 = i4063[1]
  var i4064 = []
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4065[i + 0]) );
  }
  i4062.frames = i4064
  return i4062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4067 = data
  i4066.name = i4067[0]
  i4066.index = i4067[1]
  i4066.startup = !!i4067[2]
  return i4066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4069 = data
  i4068.aspect = i4069[0]
  i4068.orthographic = !!i4069[1]
  i4068.orthographicSize = i4069[2]
  i4068.backgroundColor = new pc.Color(i4069[3], i4069[4], i4069[5], i4069[6])
  i4068.nearClipPlane = i4069[7]
  i4068.farClipPlane = i4069[8]
  i4068.fieldOfView = i4069[9]
  i4068.depth = i4069[10]
  i4068.clearFlags = i4069[11]
  i4068.cullingMask = i4069[12]
  i4068.rect = i4069[13]
  request.r(i4069[14], i4069[15], 0, i4068, 'targetTexture')
  i4068.usePhysicalProperties = !!i4069[16]
  i4068.focalLength = i4069[17]
  i4068.sensorSize = new pc.Vec2( i4069[18], i4069[19] )
  i4068.lensShift = new pc.Vec2( i4069[20], i4069[21] )
  i4068.gateFit = i4069[22]
  i4068.commandBufferCount = i4069[23]
  i4068.cameraType = i4069[24]
  i4068.enabled = !!i4069[25]
  return i4068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4071 = data
  i4070.color = new pc.Color(i4071[0], i4071[1], i4071[2], i4071[3])
  request.r(i4071[4], i4071[5], 0, i4070, 'sprite')
  i4070.flipX = !!i4071[6]
  i4070.flipY = !!i4071[7]
  i4070.drawMode = i4071[8]
  i4070.size = new pc.Vec2( i4071[9], i4071[10] )
  i4070.tileMode = i4071[11]
  i4070.adaptiveModeThreshold = i4071[12]
  i4070.maskInteraction = i4071[13]
  i4070.spriteSortPoint = i4071[14]
  i4070.enabled = !!i4071[15]
  request.r(i4071[16], i4071[17], 0, i4070, 'sharedMaterial')
  var i4073 = i4071[18]
  var i4072 = []
  for(var i = 0; i < i4073.length; i += 2) {
  request.r(i4073[i + 0], i4073[i + 1], 2, i4072, '')
  }
  i4070.sharedMaterials = i4072
  i4070.receiveShadows = !!i4071[19]
  i4070.shadowCastingMode = i4071[20]
  i4070.sortingLayerID = i4071[21]
  i4070.sortingOrder = i4071[22]
  i4070.lightmapIndex = i4071[23]
  i4070.lightmapSceneIndex = i4071[24]
  i4070.lightmapScaleOffset = new pc.Vec4( i4071[25], i4071[26], i4071[27], i4071[28] )
  i4070.lightProbeUsage = i4071[29]
  i4070.reflectionProbeUsage = i4071[30]
  return i4070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4077 = data
  request.r(i4077[0], i4077[1], 0, i4076, 'sharedMesh')
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4079 = data
  request.r(i4079[0], i4079[1], 0, i4078, 'additionalVertexStreams')
  i4078.enabled = !!i4079[2]
  request.r(i4079[3], i4079[4], 0, i4078, 'sharedMaterial')
  var i4081 = i4079[5]
  var i4080 = []
  for(var i = 0; i < i4081.length; i += 2) {
  request.r(i4081[i + 0], i4081[i + 1], 2, i4080, '')
  }
  i4078.sharedMaterials = i4080
  i4078.receiveShadows = !!i4079[6]
  i4078.shadowCastingMode = i4079[7]
  i4078.sortingLayerID = i4079[8]
  i4078.sortingOrder = i4079[9]
  i4078.lightmapIndex = i4079[10]
  i4078.lightmapSceneIndex = i4079[11]
  i4078.lightmapScaleOffset = new pc.Vec4( i4079[12], i4079[13], i4079[14], i4079[15] )
  i4078.lightProbeUsage = i4079[16]
  i4078.reflectionProbeUsage = i4079[17]
  return i4078
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i4082 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i4083 = data
  i4082.loop = !!i4083[0]
  i4082.timeScale = i4083[1]
  request.r(i4083[2], i4083[3], 0, i4082, 'skeletonDataAsset')
  i4082.initialSkinName = i4083[4]
  i4082.fixPrefabOverrideViaMeshFilter = i4083[5]
  i4082.initialFlipX = !!i4083[6]
  i4082.initialFlipY = !!i4083[7]
  i4082.updateWhenInvisible = i4083[8]
  i4082.zSpacing = i4083[9]
  i4082.useClipping = !!i4083[10]
  i4082.immutableTriangles = !!i4083[11]
  i4082.pmaVertexColors = !!i4083[12]
  i4082.clearStateOnDisable = !!i4083[13]
  i4082.tintBlack = !!i4083[14]
  i4082.singleSubmesh = !!i4083[15]
  i4082.fixDrawOrder = !!i4083[16]
  i4082.addNormals = !!i4083[17]
  i4082.calculateTangents = !!i4083[18]
  i4082.maskInteraction = i4083[19]
  i4082.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i4083[20], i4082.maskMaterials)
  i4082.disableRenderingOnOverride = !!i4083[21]
  i4082.updateTiming = i4083[22]
  i4082.unscaledTime = !!i4083[23]
  i4082._animationName = i4083[24]
  var i4085 = i4083[25]
  var i4084 = []
  for(var i = 0; i < i4085.length; i += 1) {
    i4084.push( i4085[i + 0] );
  }
  i4082.separatorSlotNames = i4084
  return i4082
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i4086 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i4087 = data
  var i4089 = i4087[0]
  var i4088 = []
  for(var i = 0; i < i4089.length; i += 2) {
  request.r(i4089[i + 0], i4089[i + 1], 2, i4088, '')
  }
  i4086.materialsMaskDisabled = i4088
  var i4091 = i4087[1]
  var i4090 = []
  for(var i = 0; i < i4091.length; i += 2) {
  request.r(i4091[i + 0], i4091[i + 1], 2, i4090, '')
  }
  i4086.materialsInsideMask = i4090
  var i4093 = i4087[2]
  var i4092 = []
  for(var i = 0; i < i4093.length; i += 2) {
  request.r(i4093[i + 0], i4093[i + 1], 2, i4092, '')
  }
  i4086.materialsOutsideMask = i4092
  return i4086
}

Deserializers["CharacterSkinMixer"] = function (request, data, root) {
  var i4096 = root || request.c( 'CharacterSkinMixer' )
  var i4097 = data
  request.r(i4097[0], i4097[1], 0, i4096, 'skeletonAnimation')
  i4096.bodySkinName = i4097[2]
  i4096.mouthSkinName = i4097[3]
  i4096.eyeBrowName = i4097[4]
  i4096.currentEyeSkin = i4097[5]
  i4096.currentEyelidSkin = i4097[6]
  i4096.currentHairBackSkin = i4097[7]
  i4096.currentHairFrontSkin = i4097[8]
  i4096.currentOutfitSkin = i4097[9]
  i4096.currentShoeSkin = i4097[10]
  return i4096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4099 = data
  request.r(i4099[0], i4099[1], 0, i4098, 'animatorController')
  request.r(i4099[2], i4099[3], 0, i4098, 'avatar')
  i4098.updateMode = i4099[4]
  i4098.hasTransformHierarchy = !!i4099[5]
  i4098.applyRootMotion = !!i4099[6]
  var i4101 = i4099[7]
  var i4100 = []
  for(var i = 0; i < i4101.length; i += 2) {
  request.r(i4101[i + 0], i4101[i + 1], 2, i4100, '')
  }
  i4098.humanBones = i4100
  i4098.enabled = !!i4099[8]
  return i4098
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4104 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4105 = data
  request.r(i4105[0], i4105[1], 0, i4104, 'm_FirstSelected')
  i4104.m_sendNavigationEvents = !!i4105[2]
  i4104.m_DragThreshold = i4105[3]
  return i4104
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4106 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4107 = data
  i4106.m_HorizontalAxis = i4107[0]
  i4106.m_VerticalAxis = i4107[1]
  i4106.m_SubmitButton = i4107[2]
  i4106.m_CancelButton = i4107[3]
  i4106.m_InputActionsPerSecond = i4107[4]
  i4106.m_RepeatDelay = i4107[5]
  i4106.m_ForceModuleActive = !!i4107[6]
  i4106.m_SendPointerHoverToParent = !!i4107[7]
  return i4106
}

Deserializers["CustomizationFlowManager"] = function (request, data, root) {
  var i4108 = root || request.c( 'CustomizationFlowManager' )
  var i4109 = data
  request.r(i4109[0], i4109[1], 0, i4108, 'portraitCanvas')
  request.r(i4109[2], i4109[3], 0, i4108, 'p_eyeScroller')
  request.r(i4109[4], i4109[5], 0, i4108, 'p_hairScroller')
  request.r(i4109[6], i4109[7], 0, i4108, 'p_clothesScroller')
  request.r(i4109[8], i4109[9], 0, i4108, 'p_shoeScroller')
  request.r(i4109[10], i4109[11], 0, i4108, 'p_btnNext')
  request.r(i4109[12], i4109[13], 0, i4108, 'p_btnDone')
  request.r(i4109[14], i4109[15], 0, i4108, 'p_endGamePanel')
  request.r(i4109[16], i4109[17], 0, i4108, 'landscapeCanvas')
  request.r(i4109[18], i4109[19], 0, i4108, 'l_eyeScroller')
  request.r(i4109[20], i4109[21], 0, i4108, 'l_hairScroller')
  request.r(i4109[22], i4109[23], 0, i4108, 'l_clothesScroller')
  request.r(i4109[24], i4109[25], 0, i4108, 'l_shoeScroller')
  request.r(i4109[26], i4109[27], 0, i4108, 'l_btnNext')
  request.r(i4109[28], i4109[29], 0, i4108, 'l_btnDone')
  request.r(i4109[30], i4109[31], 0, i4108, 'l_endGamePanel')
  request.r(i4109[32], i4109[33], 0, i4108, 'characterSpine')
  i4108.danceAnimationName = i4109[34]
  return i4108
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4110 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4111 = data
  i4110.m_hasFontAssetChanged = !!i4111[0]
  request.r(i4111[1], i4111[2], 0, i4110, 'm_baseMaterial')
  i4110.m_maskOffset = new pc.Vec4( i4111[3], i4111[4], i4111[5], i4111[6] )
  i4110.m_text = i4111[7]
  i4110.m_isRightToLeft = !!i4111[8]
  request.r(i4111[9], i4111[10], 0, i4110, 'm_fontAsset')
  request.r(i4111[11], i4111[12], 0, i4110, 'm_sharedMaterial')
  var i4113 = i4111[13]
  var i4112 = []
  for(var i = 0; i < i4113.length; i += 2) {
  request.r(i4113[i + 0], i4113[i + 1], 2, i4112, '')
  }
  i4110.m_fontSharedMaterials = i4112
  request.r(i4111[14], i4111[15], 0, i4110, 'm_fontMaterial')
  var i4115 = i4111[16]
  var i4114 = []
  for(var i = 0; i < i4115.length; i += 2) {
  request.r(i4115[i + 0], i4115[i + 1], 2, i4114, '')
  }
  i4110.m_fontMaterials = i4114
  i4110.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4111[17], i4111[18], i4111[19], i4111[20])
  i4110.m_fontColor = new pc.Color(i4111[21], i4111[22], i4111[23], i4111[24])
  i4110.m_enableVertexGradient = !!i4111[25]
  i4110.m_colorMode = i4111[26]
  i4110.m_fontColorGradient = request.d('TMPro.VertexGradient', i4111[27], i4110.m_fontColorGradient)
  request.r(i4111[28], i4111[29], 0, i4110, 'm_fontColorGradientPreset')
  request.r(i4111[30], i4111[31], 0, i4110, 'm_spriteAsset')
  i4110.m_tintAllSprites = !!i4111[32]
  request.r(i4111[33], i4111[34], 0, i4110, 'm_StyleSheet')
  i4110.m_TextStyleHashCode = i4111[35]
  i4110.m_overrideHtmlColors = !!i4111[36]
  i4110.m_faceColor = UnityEngine.Color32.ConstructColor(i4111[37], i4111[38], i4111[39], i4111[40])
  i4110.m_fontSize = i4111[41]
  i4110.m_fontSizeBase = i4111[42]
  i4110.m_fontWeight = i4111[43]
  i4110.m_enableAutoSizing = !!i4111[44]
  i4110.m_fontSizeMin = i4111[45]
  i4110.m_fontSizeMax = i4111[46]
  i4110.m_fontStyle = i4111[47]
  i4110.m_HorizontalAlignment = i4111[48]
  i4110.m_VerticalAlignment = i4111[49]
  i4110.m_textAlignment = i4111[50]
  i4110.m_characterSpacing = i4111[51]
  i4110.m_wordSpacing = i4111[52]
  i4110.m_lineSpacing = i4111[53]
  i4110.m_lineSpacingMax = i4111[54]
  i4110.m_paragraphSpacing = i4111[55]
  i4110.m_charWidthMaxAdj = i4111[56]
  i4110.m_enableWordWrapping = !!i4111[57]
  i4110.m_wordWrappingRatios = i4111[58]
  i4110.m_overflowMode = i4111[59]
  request.r(i4111[60], i4111[61], 0, i4110, 'm_linkedTextComponent')
  request.r(i4111[62], i4111[63], 0, i4110, 'parentLinkedComponent')
  i4110.m_enableKerning = !!i4111[64]
  i4110.m_enableExtraPadding = !!i4111[65]
  i4110.checkPaddingRequired = !!i4111[66]
  i4110.m_isRichText = !!i4111[67]
  i4110.m_parseCtrlCharacters = !!i4111[68]
  i4110.m_isOrthographic = !!i4111[69]
  i4110.m_isCullingEnabled = !!i4111[70]
  i4110.m_horizontalMapping = i4111[71]
  i4110.m_verticalMapping = i4111[72]
  i4110.m_uvLineOffset = i4111[73]
  i4110.m_geometrySortingOrder = i4111[74]
  i4110.m_IsTextObjectScaleStatic = !!i4111[75]
  i4110.m_VertexBufferAutoSizeReduction = !!i4111[76]
  i4110.m_useMaxVisibleDescender = !!i4111[77]
  i4110.m_pageToDisplay = i4111[78]
  i4110.m_margin = new pc.Vec4( i4111[79], i4111[80], i4111[81], i4111[82] )
  i4110.m_isUsingLegacyAnimationComponent = !!i4111[83]
  i4110.m_isVolumetricText = !!i4111[84]
  request.r(i4111[85], i4111[86], 0, i4110, 'm_Material')
  i4110.m_Maskable = !!i4111[87]
  i4110.m_Color = new pc.Color(i4111[88], i4111[89], i4111[90], i4111[91])
  i4110.m_RaycastTarget = !!i4111[92]
  i4110.m_RaycastPadding = new pc.Vec4( i4111[93], i4111[94], i4111[95], i4111[96] )
  return i4110
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4116 = root || request.c( 'TMPro.VertexGradient' )
  var i4117 = data
  i4116.topLeft = new pc.Color(i4117[0], i4117[1], i4117[2], i4117[3])
  i4116.topRight = new pc.Color(i4117[4], i4117[5], i4117[6], i4117[7])
  i4116.bottomLeft = new pc.Color(i4117[8], i4117[9], i4117[10], i4117[11])
  i4116.bottomRight = new pc.Color(i4117[12], i4117[13], i4117[14], i4117[15])
  return i4116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4119 = data
  i4118.ambientIntensity = i4119[0]
  i4118.reflectionIntensity = i4119[1]
  i4118.ambientMode = i4119[2]
  i4118.ambientLight = new pc.Color(i4119[3], i4119[4], i4119[5], i4119[6])
  i4118.ambientSkyColor = new pc.Color(i4119[7], i4119[8], i4119[9], i4119[10])
  i4118.ambientGroundColor = new pc.Color(i4119[11], i4119[12], i4119[13], i4119[14])
  i4118.ambientEquatorColor = new pc.Color(i4119[15], i4119[16], i4119[17], i4119[18])
  i4118.fogColor = new pc.Color(i4119[19], i4119[20], i4119[21], i4119[22])
  i4118.fogEndDistance = i4119[23]
  i4118.fogStartDistance = i4119[24]
  i4118.fogDensity = i4119[25]
  i4118.fog = !!i4119[26]
  request.r(i4119[27], i4119[28], 0, i4118, 'skybox')
  i4118.fogMode = i4119[29]
  var i4121 = i4119[30]
  var i4120 = []
  for(var i = 0; i < i4121.length; i += 1) {
    i4120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4121[i + 0]) );
  }
  i4118.lightmaps = i4120
  i4118.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4119[31], i4118.lightProbes)
  i4118.lightmapsMode = i4119[32]
  i4118.mixedBakeMode = i4119[33]
  i4118.environmentLightingMode = i4119[34]
  i4118.ambientProbe = new pc.SphericalHarmonicsL2(i4119[35])
  i4118.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4119[36])
  i4118.useReferenceAmbientProbe = !!i4119[37]
  request.r(i4119[38], i4119[39], 0, i4118, 'customReflection')
  request.r(i4119[40], i4119[41], 0, i4118, 'defaultReflection')
  i4118.defaultReflectionMode = i4119[42]
  i4118.defaultReflectionResolution = i4119[43]
  i4118.sunLightObjectId = i4119[44]
  i4118.pixelLightCount = i4119[45]
  i4118.defaultReflectionHDR = !!i4119[46]
  i4118.hasLightDataAsset = !!i4119[47]
  i4118.hasManualGenerate = !!i4119[48]
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4125 = data
  request.r(i4125[0], i4125[1], 0, i4124, 'lightmapColor')
  request.r(i4125[2], i4125[3], 0, i4124, 'lightmapDirection')
  request.r(i4125[4], i4125[5], 0, i4124, 'shadowMask')
  return i4124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4126 = root || new UnityEngine.LightProbes()
  var i4127 = data
  return i4126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4135 = data
  var i4137 = i4135[0]
  var i4136 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4137.length; i += 1) {
    i4136.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4137[i + 0]));
  }
  i4134.ShaderCompilationErrors = i4136
  i4134.name = i4135[1]
  i4134.guid = i4135[2]
  var i4139 = i4135[3]
  var i4138 = []
  for(var i = 0; i < i4139.length; i += 1) {
    i4138.push( i4139[i + 0] );
  }
  i4134.shaderDefinedKeywords = i4138
  var i4141 = i4135[4]
  var i4140 = []
  for(var i = 0; i < i4141.length; i += 1) {
    i4140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4141[i + 0]) );
  }
  i4134.passes = i4140
  var i4143 = i4135[5]
  var i4142 = []
  for(var i = 0; i < i4143.length; i += 1) {
    i4142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4143[i + 0]) );
  }
  i4134.usePasses = i4142
  var i4145 = i4135[6]
  var i4144 = []
  for(var i = 0; i < i4145.length; i += 1) {
    i4144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4145[i + 0]) );
  }
  i4134.defaultParameterValues = i4144
  request.r(i4135[7], i4135[8], 0, i4134, 'unityFallbackShader')
  i4134.readDepth = !!i4135[9]
  i4134.hasDepthOnlyPass = !!i4135[10]
  i4134.isCreatedByShaderGraph = !!i4135[11]
  i4134.disableBatching = !!i4135[12]
  i4134.compiled = !!i4135[13]
  return i4134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4149 = data
  i4148.shaderName = i4149[0]
  i4148.errorMessage = i4149[1]
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4152 = root || new pc.UnityShaderPass()
  var i4153 = data
  i4152.id = i4153[0]
  i4152.subShaderIndex = i4153[1]
  i4152.name = i4153[2]
  i4152.passType = i4153[3]
  i4152.grabPassTextureName = i4153[4]
  i4152.usePass = !!i4153[5]
  i4152.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[6], i4152.zTest)
  i4152.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[7], i4152.zWrite)
  i4152.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[8], i4152.culling)
  i4152.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4153[9], i4152.blending)
  i4152.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4153[10], i4152.alphaBlending)
  i4152.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[11], i4152.colorWriteMask)
  i4152.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[12], i4152.offsetUnits)
  i4152.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[13], i4152.offsetFactor)
  i4152.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[14], i4152.stencilRef)
  i4152.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[15], i4152.stencilReadMask)
  i4152.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4153[16], i4152.stencilWriteMask)
  i4152.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4153[17], i4152.stencilOp)
  i4152.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4153[18], i4152.stencilOpFront)
  i4152.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4153[19], i4152.stencilOpBack)
  var i4155 = i4153[20]
  var i4154 = []
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4155[i + 0]) );
  }
  i4152.tags = i4154
  var i4157 = i4153[21]
  var i4156 = []
  for(var i = 0; i < i4157.length; i += 1) {
    i4156.push( i4157[i + 0] );
  }
  i4152.passDefinedKeywords = i4156
  var i4159 = i4153[22]
  var i4158 = []
  for(var i = 0; i < i4159.length; i += 1) {
    i4158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4159[i + 0]) );
  }
  i4152.passDefinedKeywordGroups = i4158
  var i4161 = i4153[23]
  var i4160 = []
  for(var i = 0; i < i4161.length; i += 1) {
    i4160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4161[i + 0]) );
  }
  i4152.variants = i4160
  var i4163 = i4153[24]
  var i4162 = []
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4163[i + 0]) );
  }
  i4152.excludedVariants = i4162
  i4152.hasDepthReader = !!i4153[25]
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4165 = data
  i4164.val = i4165[0]
  i4164.name = i4165[1]
  return i4164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4167 = data
  i4166.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4167[0], i4166.src)
  i4166.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4167[1], i4166.dst)
  i4166.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4167[2], i4166.op)
  return i4166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4169 = data
  i4168.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4169[0], i4168.pass)
  i4168.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4169[1], i4168.fail)
  i4168.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4169[2], i4168.zFail)
  i4168.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4169[3], i4168.comp)
  return i4168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4173 = data
  i4172.name = i4173[0]
  i4172.value = i4173[1]
  return i4172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4177 = data
  var i4179 = i4177[0]
  var i4178 = []
  for(var i = 0; i < i4179.length; i += 1) {
    i4178.push( i4179[i + 0] );
  }
  i4176.keywords = i4178
  i4176.hasDiscard = !!i4177[1]
  return i4176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4183 = data
  i4182.passId = i4183[0]
  i4182.subShaderIndex = i4183[1]
  var i4185 = i4183[2]
  var i4184 = []
  for(var i = 0; i < i4185.length; i += 1) {
    i4184.push( i4185[i + 0] );
  }
  i4182.keywords = i4184
  i4182.vertexProgram = i4183[3]
  i4182.fragmentProgram = i4183[4]
  i4182.exportedForWebGl2 = !!i4183[5]
  i4182.readDepth = !!i4183[6]
  return i4182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4189 = data
  request.r(i4189[0], i4189[1], 0, i4188, 'shader')
  i4188.pass = i4189[2]
  return i4188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4193 = data
  i4192.name = i4193[0]
  i4192.type = i4193[1]
  i4192.value = new pc.Vec4( i4193[2], i4193[3], i4193[4], i4193[5] )
  i4192.textureValue = i4193[6]
  i4192.shaderPropertyFlag = i4193[7]
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4195 = data
  i4194.name = i4195[0]
  request.r(i4195[1], i4195[2], 0, i4194, 'texture')
  i4194.aabb = i4195[3]
  i4194.vertices = i4195[4]
  i4194.triangles = i4195[5]
  i4194.textureRect = UnityEngine.Rect.MinMaxRect(i4195[6], i4195[7], i4195[8], i4195[9])
  i4194.packedRect = UnityEngine.Rect.MinMaxRect(i4195[10], i4195[11], i4195[12], i4195[13])
  i4194.border = new pc.Vec4( i4195[14], i4195[15], i4195[16], i4195[17] )
  i4194.transparency = i4195[18]
  i4194.bounds = i4195[19]
  i4194.pixelsPerUnit = i4195[20]
  i4194.textureWidth = i4195[21]
  i4194.textureHeight = i4195[22]
  i4194.nativeSize = new pc.Vec2( i4195[23], i4195[24] )
  i4194.pivot = new pc.Vec2( i4195[25], i4195[26] )
  i4194.textureRectOffset = new pc.Vec2( i4195[27], i4195[28] )
  return i4194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4197 = data
  i4196.name = i4197[0]
  i4196.wrapMode = i4197[1]
  i4196.isLooping = !!i4197[2]
  i4196.length = i4197[3]
  var i4199 = i4197[4]
  var i4198 = []
  for(var i = 0; i < i4199.length; i += 1) {
    i4198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4199[i + 0]) );
  }
  i4196.curves = i4198
  var i4201 = i4197[5]
  var i4200 = []
  for(var i = 0; i < i4201.length; i += 1) {
    i4200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4201[i + 0]) );
  }
  i4196.events = i4200
  i4196.halfPrecision = !!i4197[6]
  i4196._frameRate = i4197[7]
  i4196.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4197[8], i4196.localBounds)
  i4196.hasMuscleCurves = !!i4197[9]
  var i4203 = i4197[10]
  var i4202 = []
  for(var i = 0; i < i4203.length; i += 1) {
    i4202.push( i4203[i + 0] );
  }
  i4196.clipMuscleConstant = i4202
  i4196.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4197[11], i4196.clipBindingConstant)
  return i4196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4207 = data
  i4206.path = i4207[0]
  i4206.hash = i4207[1]
  i4206.componentType = i4207[2]
  i4206.property = i4207[3]
  i4206.keys = i4207[4]
  var i4209 = i4207[5]
  var i4208 = []
  for(var i = 0; i < i4209.length; i += 1) {
    i4208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4209[i + 0]) );
  }
  i4206.objectReferenceKeys = i4208
  return i4206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4213 = data
  i4212.time = i4213[0]
  request.r(i4213[1], i4213[2], 0, i4212, 'value')
  return i4212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4217 = data
  i4216.functionName = i4217[0]
  i4216.floatParameter = i4217[1]
  i4216.intParameter = i4217[2]
  i4216.stringParameter = i4217[3]
  request.r(i4217[4], i4217[5], 0, i4216, 'objectReferenceParameter')
  i4216.time = i4217[6]
  return i4216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4219 = data
  i4218.center = new pc.Vec3( i4219[0], i4219[1], i4219[2] )
  i4218.extends = new pc.Vec3( i4219[3], i4219[4], i4219[5] )
  return i4218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4223 = data
  var i4225 = i4223[0]
  var i4224 = []
  for(var i = 0; i < i4225.length; i += 1) {
    i4224.push( i4225[i + 0] );
  }
  i4222.genericBindings = i4224
  var i4227 = i4223[1]
  var i4226 = []
  for(var i = 0; i < i4227.length; i += 1) {
    i4226.push( i4227[i + 0] );
  }
  i4222.pptrCurveMapping = i4226
  return i4222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4229 = data
  i4228.name = i4229[0]
  i4228.ascent = i4229[1]
  i4228.originalLineHeight = i4229[2]
  i4228.fontSize = i4229[3]
  var i4231 = i4229[4]
  var i4230 = []
  for(var i = 0; i < i4231.length; i += 1) {
    i4230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4231[i + 0]) );
  }
  i4228.characterInfo = i4230
  request.r(i4229[5], i4229[6], 0, i4228, 'texture')
  i4228.originalFontSize = i4229[7]
  return i4228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4235 = data
  i4234.index = i4235[0]
  i4234.advance = i4235[1]
  i4234.bearing = i4235[2]
  i4234.glyphWidth = i4235[3]
  i4234.glyphHeight = i4235[4]
  i4234.minX = i4235[5]
  i4234.maxX = i4235[6]
  i4234.minY = i4235[7]
  i4234.maxY = i4235[8]
  i4234.uvBottomLeftX = i4235[9]
  i4234.uvBottomLeftY = i4235[10]
  i4234.uvBottomRightX = i4235[11]
  i4234.uvBottomRightY = i4235[12]
  i4234.uvTopLeftX = i4235[13]
  i4234.uvTopLeftY = i4235[14]
  i4234.uvTopRightX = i4235[15]
  i4234.uvTopRightY = i4235[16]
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4237 = data
  i4236.name = i4237[0]
  var i4239 = i4237[1]
  var i4238 = []
  for(var i = 0; i < i4239.length; i += 1) {
    i4238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4239[i + 0]) );
  }
  i4236.layers = i4238
  var i4241 = i4237[2]
  var i4240 = []
  for(var i = 0; i < i4241.length; i += 1) {
    i4240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4241[i + 0]) );
  }
  i4236.parameters = i4240
  i4236.animationClips = i4237[3]
  i4236.avatarUnsupported = i4237[4]
  return i4236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4245 = data
  i4244.name = i4245[0]
  i4244.defaultWeight = i4245[1]
  i4244.blendingMode = i4245[2]
  i4244.avatarMask = i4245[3]
  i4244.syncedLayerIndex = i4245[4]
  i4244.syncedLayerAffectsTiming = !!i4245[5]
  i4244.syncedLayers = i4245[6]
  i4244.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4245[7], i4244.stateMachine)
  return i4244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4247 = data
  i4246.id = i4247[0]
  i4246.name = i4247[1]
  i4246.path = i4247[2]
  var i4249 = i4247[3]
  var i4248 = []
  for(var i = 0; i < i4249.length; i += 1) {
    i4248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4249[i + 0]) );
  }
  i4246.states = i4248
  var i4251 = i4247[4]
  var i4250 = []
  for(var i = 0; i < i4251.length; i += 1) {
    i4250.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4251[i + 0]) );
  }
  i4246.machines = i4250
  var i4253 = i4247[5]
  var i4252 = []
  for(var i = 0; i < i4253.length; i += 1) {
    i4252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4253[i + 0]) );
  }
  i4246.entryStateTransitions = i4252
  var i4255 = i4247[6]
  var i4254 = []
  for(var i = 0; i < i4255.length; i += 1) {
    i4254.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4255[i + 0]) );
  }
  i4246.exitStateTransitions = i4254
  var i4257 = i4247[7]
  var i4256 = []
  for(var i = 0; i < i4257.length; i += 1) {
    i4256.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4257[i + 0]) );
  }
  i4246.anyStateTransitions = i4256
  i4246.defaultStateId = i4247[8]
  return i4246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4261 = data
  i4260.id = i4261[0]
  i4260.name = i4261[1]
  i4260.cycleOffset = i4261[2]
  i4260.cycleOffsetParameter = i4261[3]
  i4260.cycleOffsetParameterActive = !!i4261[4]
  i4260.mirror = !!i4261[5]
  i4260.mirrorParameter = i4261[6]
  i4260.mirrorParameterActive = !!i4261[7]
  i4260.motionId = i4261[8]
  i4260.nameHash = i4261[9]
  i4260.fullPathHash = i4261[10]
  i4260.speed = i4261[11]
  i4260.speedParameter = i4261[12]
  i4260.speedParameterActive = !!i4261[13]
  i4260.tag = i4261[14]
  i4260.tagHash = i4261[15]
  i4260.writeDefaultValues = !!i4261[16]
  var i4263 = i4261[17]
  var i4262 = []
  for(var i = 0; i < i4263.length; i += 2) {
  request.r(i4263[i + 0], i4263[i + 1], 2, i4262, '')
  }
  i4260.behaviours = i4262
  var i4265 = i4261[18]
  var i4264 = []
  for(var i = 0; i < i4265.length; i += 1) {
    i4264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4265[i + 0]) );
  }
  i4260.transitions = i4264
  return i4260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4271 = data
  i4270.fullPath = i4271[0]
  i4270.canTransitionToSelf = !!i4271[1]
  i4270.duration = i4271[2]
  i4270.exitTime = i4271[3]
  i4270.hasExitTime = !!i4271[4]
  i4270.hasFixedDuration = !!i4271[5]
  i4270.interruptionSource = i4271[6]
  i4270.offset = i4271[7]
  i4270.orderedInterruption = !!i4271[8]
  i4270.destinationStateId = i4271[9]
  i4270.isExit = !!i4271[10]
  i4270.mute = !!i4271[11]
  i4270.solo = !!i4271[12]
  var i4273 = i4271[13]
  var i4272 = []
  for(var i = 0; i < i4273.length; i += 1) {
    i4272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4273[i + 0]) );
  }
  i4270.conditions = i4272
  return i4270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4279 = data
  i4278.destinationStateId = i4279[0]
  i4278.isExit = !!i4279[1]
  i4278.mute = !!i4279[2]
  i4278.solo = !!i4279[3]
  var i4281 = i4279[4]
  var i4280 = []
  for(var i = 0; i < i4281.length; i += 1) {
    i4280.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4281[i + 0]) );
  }
  i4278.conditions = i4280
  return i4278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4285 = data
  i4284.defaultBool = !!i4285[0]
  i4284.defaultFloat = i4285[1]
  i4284.defaultInt = i4285[2]
  i4284.name = i4285[3]
  i4284.nameHash = i4285[4]
  i4284.type = i4285[5]
  return i4284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4287 = data
  i4286.name = i4287[0]
  i4286.bytes64 = i4287[1]
  i4286.data = i4287[2]
  return i4286
}

Deserializers["SkinOptionData"] = function (request, data, root) {
  var i4288 = root || request.c( 'SkinOptionData' )
  var i4289 = data
  request.r(i4289[0], i4289[1], 0, i4288, 'thumbnail')
  i4288.primarySkinName = i4289[2]
  i4288.secondarySkinName = i4289[3]
  return i4288
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4290 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4291 = data
  var i4293 = i4291[0]
  var i4292 = []
  for(var i = 0; i < i4293.length; i += 2) {
  request.r(i4293[i + 0], i4293[i + 1], 2, i4292, '')
  }
  i4290.atlasAssets = i4292
  i4290.scale = i4291[1]
  request.r(i4291[2], i4291[3], 0, i4290, 'skeletonJSON')
  i4290.isUpgradingBlendModeMaterials = !!i4291[4]
  i4290.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4291[5], i4290.blendModeMaterials)
  var i4295 = i4291[6]
  var i4294 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4295.length; i += 2) {
  request.r(i4295[i + 0], i4295[i + 1], 1, i4294, '')
  }
  i4290.skeletonDataModifiers = i4294
  var i4297 = i4291[7]
  var i4296 = []
  for(var i = 0; i < i4297.length; i += 1) {
    i4296.push( i4297[i + 0] );
  }
  i4290.fromAnimation = i4296
  var i4299 = i4291[8]
  var i4298 = []
  for(var i = 0; i < i4299.length; i += 1) {
    i4298.push( i4299[i + 0] );
  }
  i4290.toAnimation = i4298
  i4290.duration = i4291[9]
  i4290.defaultMix = i4291[10]
  request.r(i4291[11], i4291[12], 0, i4290, 'controller')
  return i4290
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4302 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4303 = data
  i4302.applyAdditiveMaterial = !!i4303[0]
  var i4305 = i4303[1]
  var i4304 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4305.length; i += 1) {
    i4304.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4305[i + 0]));
  }
  i4302.additiveMaterials = i4304
  var i4307 = i4303[2]
  var i4306 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4307.length; i += 1) {
    i4306.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4307[i + 0]));
  }
  i4302.multiplyMaterials = i4306
  var i4309 = i4303[3]
  var i4308 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4309.length; i += 1) {
    i4308.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4309[i + 0]));
  }
  i4302.screenMaterials = i4308
  i4302.requiresBlendModeMaterials = !!i4303[4]
  return i4302
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4312 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4313 = data
  i4312.pageName = i4313[0]
  request.r(i4313[1], i4313[2], 0, i4312, 'material')
  return i4312
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4316 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4317 = data
  request.r(i4317[0], i4317[1], 0, i4316, 'atlasFile')
  var i4319 = i4317[2]
  var i4318 = []
  for(var i = 0; i < i4319.length; i += 2) {
  request.r(i4319[i + 0], i4319[i + 1], 2, i4318, '')
  }
  i4316.materials = i4318
  i4316.textureLoadingMode = i4317[3]
  request.r(i4317[4], i4317[5], 0, i4316, 'onDemandTextureLoader')
  return i4316
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4320 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4321 = data
  request.r(i4321[0], i4321[1], 0, i4320, 'atlas')
  i4320.normalStyle = i4321[2]
  i4320.normalSpacingOffset = i4321[3]
  i4320.boldStyle = i4321[4]
  i4320.boldSpacing = i4321[5]
  i4320.italicStyle = i4321[6]
  i4320.tabSize = i4321[7]
  i4320.hashCode = i4321[8]
  request.r(i4321[9], i4321[10], 0, i4320, 'material')
  i4320.materialHashCode = i4321[11]
  i4320.m_Version = i4321[12]
  i4320.m_SourceFontFileGUID = i4321[13]
  request.r(i4321[14], i4321[15], 0, i4320, 'm_SourceFontFile_EditorRef')
  request.r(i4321[16], i4321[17], 0, i4320, 'm_SourceFontFile')
  i4320.m_AtlasPopulationMode = i4321[18]
  i4320.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4321[19], i4320.m_FaceInfo)
  var i4323 = i4321[20]
  var i4322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4323.length; i += 1) {
    i4322.add(request.d('UnityEngine.TextCore.Glyph', i4323[i + 0]));
  }
  i4320.m_GlyphTable = i4322
  var i4325 = i4321[21]
  var i4324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4325.length; i += 1) {
    i4324.add(request.d('TMPro.TMP_Character', i4325[i + 0]));
  }
  i4320.m_CharacterTable = i4324
  var i4327 = i4321[22]
  var i4326 = []
  for(var i = 0; i < i4327.length; i += 2) {
  request.r(i4327[i + 0], i4327[i + 1], 2, i4326, '')
  }
  i4320.m_AtlasTextures = i4326
  i4320.m_AtlasTextureIndex = i4321[23]
  i4320.m_IsMultiAtlasTexturesEnabled = !!i4321[24]
  i4320.m_ClearDynamicDataOnBuild = !!i4321[25]
  var i4329 = i4321[26]
  var i4328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4329.length; i += 1) {
    i4328.add(request.d('UnityEngine.TextCore.GlyphRect', i4329[i + 0]));
  }
  i4320.m_UsedGlyphRects = i4328
  var i4331 = i4321[27]
  var i4330 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4331.length; i += 1) {
    i4330.add(request.d('UnityEngine.TextCore.GlyphRect', i4331[i + 0]));
  }
  i4320.m_FreeGlyphRects = i4330
  i4320.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4321[28], i4320.m_fontInfo)
  i4320.m_AtlasWidth = i4321[29]
  i4320.m_AtlasHeight = i4321[30]
  i4320.m_AtlasPadding = i4321[31]
  i4320.m_AtlasRenderMode = i4321[32]
  var i4333 = i4321[33]
  var i4332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4333.length; i += 1) {
    i4332.add(request.d('TMPro.TMP_Glyph', i4333[i + 0]));
  }
  i4320.m_glyphInfoList = i4332
  i4320.m_KerningTable = request.d('TMPro.KerningTable', i4321[34], i4320.m_KerningTable)
  i4320.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4321[35], i4320.m_FontFeatureTable)
  var i4335 = i4321[36]
  var i4334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4335.length; i += 2) {
  request.r(i4335[i + 0], i4335[i + 1], 1, i4334, '')
  }
  i4320.fallbackFontAssets = i4334
  var i4337 = i4321[37]
  var i4336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4337.length; i += 2) {
  request.r(i4337[i + 0], i4337[i + 1], 1, i4336, '')
  }
  i4320.m_FallbackFontAssetTable = i4336
  i4320.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4321[38], i4320.m_CreationSettings)
  var i4339 = i4321[39]
  var i4338 = []
  for(var i = 0; i < i4339.length; i += 1) {
    i4338.push( request.d('TMPro.TMP_FontWeightPair', i4339[i + 0]) );
  }
  i4320.m_FontWeightTable = i4338
  var i4341 = i4321[40]
  var i4340 = []
  for(var i = 0; i < i4341.length; i += 1) {
    i4340.push( request.d('TMPro.TMP_FontWeightPair', i4341[i + 0]) );
  }
  i4320.fontWeights = i4340
  return i4320
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4342 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4343 = data
  i4342.m_FaceIndex = i4343[0]
  i4342.m_FamilyName = i4343[1]
  i4342.m_StyleName = i4343[2]
  i4342.m_PointSize = i4343[3]
  i4342.m_Scale = i4343[4]
  i4342.m_UnitsPerEM = i4343[5]
  i4342.m_LineHeight = i4343[6]
  i4342.m_AscentLine = i4343[7]
  i4342.m_CapLine = i4343[8]
  i4342.m_MeanLine = i4343[9]
  i4342.m_Baseline = i4343[10]
  i4342.m_DescentLine = i4343[11]
  i4342.m_SuperscriptOffset = i4343[12]
  i4342.m_SuperscriptSize = i4343[13]
  i4342.m_SubscriptOffset = i4343[14]
  i4342.m_SubscriptSize = i4343[15]
  i4342.m_UnderlineOffset = i4343[16]
  i4342.m_UnderlineThickness = i4343[17]
  i4342.m_StrikethroughOffset = i4343[18]
  i4342.m_StrikethroughThickness = i4343[19]
  i4342.m_TabWidth = i4343[20]
  return i4342
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4346 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4347 = data
  i4346.m_Index = i4347[0]
  i4346.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4347[1], i4346.m_Metrics)
  i4346.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4347[2], i4346.m_GlyphRect)
  i4346.m_Scale = i4347[3]
  i4346.m_AtlasIndex = i4347[4]
  i4346.m_ClassDefinitionType = i4347[5]
  return i4346
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4348 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4349 = data
  i4348.m_Width = i4349[0]
  i4348.m_Height = i4349[1]
  i4348.m_HorizontalBearingX = i4349[2]
  i4348.m_HorizontalBearingY = i4349[3]
  i4348.m_HorizontalAdvance = i4349[4]
  return i4348
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4350 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4351 = data
  i4350.m_X = i4351[0]
  i4350.m_Y = i4351[1]
  i4350.m_Width = i4351[2]
  i4350.m_Height = i4351[3]
  return i4350
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4354 = root || request.c( 'TMPro.TMP_Character' )
  var i4355 = data
  i4354.m_ElementType = i4355[0]
  i4354.m_Unicode = i4355[1]
  i4354.m_GlyphIndex = i4355[2]
  i4354.m_Scale = i4355[3]
  return i4354
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4360 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4361 = data
  i4360.Name = i4361[0]
  i4360.PointSize = i4361[1]
  i4360.Scale = i4361[2]
  i4360.CharacterCount = i4361[3]
  i4360.LineHeight = i4361[4]
  i4360.Baseline = i4361[5]
  i4360.Ascender = i4361[6]
  i4360.CapHeight = i4361[7]
  i4360.Descender = i4361[8]
  i4360.CenterLine = i4361[9]
  i4360.SuperscriptOffset = i4361[10]
  i4360.SubscriptOffset = i4361[11]
  i4360.SubSize = i4361[12]
  i4360.Underline = i4361[13]
  i4360.UnderlineThickness = i4361[14]
  i4360.strikethrough = i4361[15]
  i4360.strikethroughThickness = i4361[16]
  i4360.TabWidth = i4361[17]
  i4360.Padding = i4361[18]
  i4360.AtlasWidth = i4361[19]
  i4360.AtlasHeight = i4361[20]
  return i4360
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4364 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4365 = data
  i4364.id = i4365[0]
  i4364.x = i4365[1]
  i4364.y = i4365[2]
  i4364.width = i4365[3]
  i4364.height = i4365[4]
  i4364.xOffset = i4365[5]
  i4364.yOffset = i4365[6]
  i4364.xAdvance = i4365[7]
  i4364.scale = i4365[8]
  return i4364
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4366 = root || request.c( 'TMPro.KerningTable' )
  var i4367 = data
  var i4369 = i4367[0]
  var i4368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4369.length; i += 1) {
    i4368.add(request.d('TMPro.KerningPair', i4369[i + 0]));
  }
  i4366.kerningPairs = i4368
  return i4366
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4372 = root || request.c( 'TMPro.KerningPair' )
  var i4373 = data
  i4372.xOffset = i4373[0]
  i4372.m_FirstGlyph = i4373[1]
  i4372.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4373[2], i4372.m_FirstGlyphAdjustments)
  i4372.m_SecondGlyph = i4373[3]
  i4372.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4373[4], i4372.m_SecondGlyphAdjustments)
  i4372.m_IgnoreSpacingAdjustments = !!i4373[5]
  return i4372
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4374 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4375 = data
  var i4377 = i4375[0]
  var i4376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4377.length; i += 1) {
    i4376.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4377[i + 0]));
  }
  i4374.m_GlyphPairAdjustmentRecords = i4376
  return i4374
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4380 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4381 = data
  i4380.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4381[0], i4380.m_FirstAdjustmentRecord)
  i4380.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4381[1], i4380.m_SecondAdjustmentRecord)
  i4380.m_FeatureLookupFlags = i4381[2]
  return i4380
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4382 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4383 = data
  i4382.m_GlyphIndex = i4383[0]
  i4382.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4383[1], i4382.m_GlyphValueRecord)
  return i4382
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4384 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4385 = data
  i4384.m_XPlacement = i4385[0]
  i4384.m_YPlacement = i4385[1]
  i4384.m_XAdvance = i4385[2]
  i4384.m_YAdvance = i4385[3]
  return i4384
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4388 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4389 = data
  i4388.sourceFontFileName = i4389[0]
  i4388.sourceFontFileGUID = i4389[1]
  i4388.pointSizeSamplingMode = i4389[2]
  i4388.pointSize = i4389[3]
  i4388.padding = i4389[4]
  i4388.packingMode = i4389[5]
  i4388.atlasWidth = i4389[6]
  i4388.atlasHeight = i4389[7]
  i4388.characterSetSelectionMode = i4389[8]
  i4388.characterSequence = i4389[9]
  i4388.referencedFontAssetGUID = i4389[10]
  i4388.referencedTextAssetGUID = i4389[11]
  i4388.fontStyle = i4389[12]
  i4388.fontStyleModifier = i4389[13]
  i4388.renderMode = i4389[14]
  i4388.includeFontFeatures = !!i4389[15]
  return i4388
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4392 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4393 = data
  request.r(i4393[0], i4393[1], 0, i4392, 'regularTypeface')
  request.r(i4393[2], i4393[3], 0, i4392, 'italicTypeface')
  return i4392
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4394 = root || request.c( 'TMPro.TMP_Settings' )
  var i4395 = data
  i4394.m_enableWordWrapping = !!i4395[0]
  i4394.m_enableKerning = !!i4395[1]
  i4394.m_enableExtraPadding = !!i4395[2]
  i4394.m_enableTintAllSprites = !!i4395[3]
  i4394.m_enableParseEscapeCharacters = !!i4395[4]
  i4394.m_EnableRaycastTarget = !!i4395[5]
  i4394.m_GetFontFeaturesAtRuntime = !!i4395[6]
  i4394.m_missingGlyphCharacter = i4395[7]
  i4394.m_warningsDisabled = !!i4395[8]
  request.r(i4395[9], i4395[10], 0, i4394, 'm_defaultFontAsset')
  i4394.m_defaultFontAssetPath = i4395[11]
  i4394.m_defaultFontSize = i4395[12]
  i4394.m_defaultAutoSizeMinRatio = i4395[13]
  i4394.m_defaultAutoSizeMaxRatio = i4395[14]
  i4394.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4395[15], i4395[16] )
  i4394.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4395[17], i4395[18] )
  i4394.m_autoSizeTextContainer = !!i4395[19]
  i4394.m_IsTextObjectScaleStatic = !!i4395[20]
  var i4397 = i4395[21]
  var i4396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4397.length; i += 2) {
  request.r(i4397[i + 0], i4397[i + 1], 1, i4396, '')
  }
  i4394.m_fallbackFontAssets = i4396
  i4394.m_matchMaterialPreset = !!i4395[22]
  request.r(i4395[23], i4395[24], 0, i4394, 'm_defaultSpriteAsset')
  i4394.m_defaultSpriteAssetPath = i4395[25]
  i4394.m_enableEmojiSupport = !!i4395[26]
  i4394.m_MissingCharacterSpriteUnicode = i4395[27]
  i4394.m_defaultColorGradientPresetsPath = i4395[28]
  request.r(i4395[29], i4395[30], 0, i4394, 'm_defaultStyleSheet')
  i4394.m_StyleSheetsResourcePath = i4395[31]
  request.r(i4395[32], i4395[33], 0, i4394, 'm_leadingCharacters')
  request.r(i4395[34], i4395[35], 0, i4394, 'm_followingCharacters')
  i4394.m_UseModernHangulLineBreakingRules = !!i4395[36]
  return i4394
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4398 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4399 = data
  request.r(i4399[0], i4399[1], 0, i4398, 'spriteSheet')
  var i4401 = i4399[2]
  var i4400 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4401.length; i += 1) {
    i4400.add(request.d('TMPro.TMP_Sprite', i4401[i + 0]));
  }
  i4398.spriteInfoList = i4400
  var i4403 = i4399[3]
  var i4402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4403.length; i += 2) {
  request.r(i4403[i + 0], i4403[i + 1], 1, i4402, '')
  }
  i4398.fallbackSpriteAssets = i4402
  i4398.hashCode = i4399[4]
  request.r(i4399[5], i4399[6], 0, i4398, 'material')
  i4398.materialHashCode = i4399[7]
  i4398.m_Version = i4399[8]
  i4398.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4399[9], i4398.m_FaceInfo)
  var i4405 = i4399[10]
  var i4404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4405.length; i += 1) {
    i4404.add(request.d('TMPro.TMP_SpriteCharacter', i4405[i + 0]));
  }
  i4398.m_SpriteCharacterTable = i4404
  var i4407 = i4399[11]
  var i4406 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4407.length; i += 1) {
    i4406.add(request.d('TMPro.TMP_SpriteGlyph', i4407[i + 0]));
  }
  i4398.m_SpriteGlyphTable = i4406
  return i4398
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4410 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4411 = data
  i4410.name = i4411[0]
  i4410.hashCode = i4411[1]
  i4410.unicode = i4411[2]
  i4410.pivot = new pc.Vec2( i4411[3], i4411[4] )
  request.r(i4411[5], i4411[6], 0, i4410, 'sprite')
  i4410.id = i4411[7]
  i4410.x = i4411[8]
  i4410.y = i4411[9]
  i4410.width = i4411[10]
  i4410.height = i4411[11]
  i4410.xOffset = i4411[12]
  i4410.yOffset = i4411[13]
  i4410.xAdvance = i4411[14]
  i4410.scale = i4411[15]
  return i4410
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4416 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4417 = data
  i4416.m_Name = i4417[0]
  i4416.m_HashCode = i4417[1]
  i4416.m_ElementType = i4417[2]
  i4416.m_Unicode = i4417[3]
  i4416.m_GlyphIndex = i4417[4]
  i4416.m_Scale = i4417[5]
  return i4416
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4420 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4421 = data
  request.r(i4421[0], i4421[1], 0, i4420, 'sprite')
  i4420.m_Index = i4421[2]
  i4420.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4421[3], i4420.m_Metrics)
  i4420.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4421[4], i4420.m_GlyphRect)
  i4420.m_Scale = i4421[5]
  i4420.m_AtlasIndex = i4421[6]
  i4420.m_ClassDefinitionType = i4421[7]
  return i4420
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4422 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4423 = data
  var i4425 = i4423[0]
  var i4424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4425.length; i += 1) {
    i4424.add(request.d('TMPro.TMP_Style', i4425[i + 0]));
  }
  i4422.m_StyleList = i4424
  return i4422
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4428 = root || request.c( 'TMPro.TMP_Style' )
  var i4429 = data
  i4428.m_Name = i4429[0]
  i4428.m_HashCode = i4429[1]
  i4428.m_OpeningDefinition = i4429[2]
  i4428.m_ClosingDefinition = i4429[3]
  i4428.m_OpeningTagArray = i4429[4]
  i4428.m_ClosingTagArray = i4429[5]
  i4428.m_OpeningTagUnicodeArray = i4429[6]
  i4428.m_ClosingTagUnicodeArray = i4429[7]
  return i4428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4431 = data
  var i4433 = i4431[0]
  var i4432 = []
  for(var i = 0; i < i4433.length; i += 1) {
    i4432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4433[i + 0]) );
  }
  i4430.files = i4432
  i4430.componentToPrefabIds = i4431[1]
  return i4430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4437 = data
  i4436.path = i4437[0]
  request.r(i4437[1], i4437[2], 0, i4436, 'unityObject')
  return i4436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4439 = data
  var i4441 = i4439[0]
  var i4440 = []
  for(var i = 0; i < i4441.length; i += 1) {
    i4440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4441[i + 0]) );
  }
  i4438.scriptsExecutionOrder = i4440
  var i4443 = i4439[1]
  var i4442 = []
  for(var i = 0; i < i4443.length; i += 1) {
    i4442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4443[i + 0]) );
  }
  i4438.sortingLayers = i4442
  var i4445 = i4439[2]
  var i4444 = []
  for(var i = 0; i < i4445.length; i += 1) {
    i4444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4445[i + 0]) );
  }
  i4438.cullingLayers = i4444
  i4438.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4439[3], i4438.timeSettings)
  i4438.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4439[4], i4438.physicsSettings)
  i4438.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4439[5], i4438.physics2DSettings)
  i4438.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4439[6], i4438.qualitySettings)
  i4438.enableRealtimeShadows = !!i4439[7]
  i4438.enableAutoInstancing = !!i4439[8]
  i4438.enableStaticBatching = !!i4439[9]
  i4438.enableDynamicBatching = !!i4439[10]
  i4438.lightmapEncodingQuality = i4439[11]
  i4438.desiredColorSpace = i4439[12]
  var i4447 = i4439[13]
  var i4446 = []
  for(var i = 0; i < i4447.length; i += 1) {
    i4446.push( i4447[i + 0] );
  }
  i4438.allTags = i4446
  return i4438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4451 = data
  i4450.name = i4451[0]
  i4450.value = i4451[1]
  return i4450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4455 = data
  i4454.id = i4455[0]
  i4454.name = i4455[1]
  i4454.value = i4455[2]
  return i4454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4459 = data
  i4458.id = i4459[0]
  i4458.name = i4459[1]
  return i4458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4461 = data
  i4460.fixedDeltaTime = i4461[0]
  i4460.maximumDeltaTime = i4461[1]
  i4460.timeScale = i4461[2]
  i4460.maximumParticleTimestep = i4461[3]
  return i4460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4463 = data
  i4462.gravity = new pc.Vec3( i4463[0], i4463[1], i4463[2] )
  i4462.defaultSolverIterations = i4463[3]
  i4462.bounceThreshold = i4463[4]
  i4462.autoSyncTransforms = !!i4463[5]
  i4462.autoSimulation = !!i4463[6]
  var i4465 = i4463[7]
  var i4464 = []
  for(var i = 0; i < i4465.length; i += 1) {
    i4464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4465[i + 0]) );
  }
  i4462.collisionMatrix = i4464
  return i4462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4469 = data
  i4468.enabled = !!i4469[0]
  i4468.layerId = i4469[1]
  i4468.otherLayerId = i4469[2]
  return i4468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4471 = data
  request.r(i4471[0], i4471[1], 0, i4470, 'material')
  i4470.gravity = new pc.Vec2( i4471[2], i4471[3] )
  i4470.positionIterations = i4471[4]
  i4470.velocityIterations = i4471[5]
  i4470.velocityThreshold = i4471[6]
  i4470.maxLinearCorrection = i4471[7]
  i4470.maxAngularCorrection = i4471[8]
  i4470.maxTranslationSpeed = i4471[9]
  i4470.maxRotationSpeed = i4471[10]
  i4470.baumgarteScale = i4471[11]
  i4470.baumgarteTOIScale = i4471[12]
  i4470.timeToSleep = i4471[13]
  i4470.linearSleepTolerance = i4471[14]
  i4470.angularSleepTolerance = i4471[15]
  i4470.defaultContactOffset = i4471[16]
  i4470.autoSimulation = !!i4471[17]
  i4470.queriesHitTriggers = !!i4471[18]
  i4470.queriesStartInColliders = !!i4471[19]
  i4470.callbacksOnDisable = !!i4471[20]
  i4470.reuseCollisionCallbacks = !!i4471[21]
  i4470.autoSyncTransforms = !!i4471[22]
  var i4473 = i4471[23]
  var i4472 = []
  for(var i = 0; i < i4473.length; i += 1) {
    i4472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4473[i + 0]) );
  }
  i4470.collisionMatrix = i4472
  return i4470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4477 = data
  i4476.enabled = !!i4477[0]
  i4476.layerId = i4477[1]
  i4476.otherLayerId = i4477[2]
  return i4476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4479 = data
  var i4481 = i4479[0]
  var i4480 = []
  for(var i = 0; i < i4481.length; i += 1) {
    i4480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4481[i + 0]) );
  }
  i4478.qualityLevels = i4480
  var i4483 = i4479[1]
  var i4482 = []
  for(var i = 0; i < i4483.length; i += 1) {
    i4482.push( i4483[i + 0] );
  }
  i4478.names = i4482
  i4478.shadows = i4479[2]
  i4478.anisotropicFiltering = i4479[3]
  i4478.antiAliasing = i4479[4]
  i4478.lodBias = i4479[5]
  i4478.shadowCascades = i4479[6]
  i4478.shadowDistance = i4479[7]
  i4478.shadowmaskMode = i4479[8]
  i4478.shadowProjection = i4479[9]
  i4478.shadowResolution = i4479[10]
  i4478.softParticles = !!i4479[11]
  i4478.softVegetation = !!i4479[12]
  i4478.activeColorSpace = i4479[13]
  i4478.desiredColorSpace = i4479[14]
  i4478.masterTextureLimit = i4479[15]
  i4478.maxQueuedFrames = i4479[16]
  i4478.particleRaycastBudget = i4479[17]
  i4478.pixelLightCount = i4479[18]
  i4478.realtimeReflectionProbes = !!i4479[19]
  i4478.shadowCascade2Split = i4479[20]
  i4478.shadowCascade4Split = new pc.Vec3( i4479[21], i4479[22], i4479[23] )
  i4478.streamingMipmapsActive = !!i4479[24]
  i4478.vSyncCount = i4479[25]
  i4478.asyncUploadBufferSize = i4479[26]
  i4478.asyncUploadTimeSlice = i4479[27]
  i4478.billboardsFaceCameraPosition = !!i4479[28]
  i4478.shadowNearPlaneOffset = i4479[29]
  i4478.streamingMipmapsMemoryBudget = i4479[30]
  i4478.maximumLODLevel = i4479[31]
  i4478.streamingMipmapsAddAllCameras = !!i4479[32]
  i4478.streamingMipmapsMaxLevelReduction = i4479[33]
  i4478.streamingMipmapsRenderersPerFrame = i4479[34]
  i4478.resolutionScalingFixedDPIFactor = i4479[35]
  i4478.streamingMipmapsMaxFileIORequests = i4479[36]
  i4478.currentQualityLevel = i4479[37]
  return i4478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4489 = data
  i4488.weight = i4489[0]
  i4488.vertices = i4489[1]
  i4488.normals = i4489[2]
  i4488.tangents = i4489[3]
  return i4488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4493 = data
  i4492.mode = i4493[0]
  i4492.parameter = i4493[1]
  i4492.threshold = i4493[2]
  return i4492
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4494 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4495 = data
  i4494.xPlacement = i4495[0]
  i4494.yPlacement = i4495[1]
  i4494.xAdvance = i4495[2]
  i4494.yAdvance = i4495[3]
  return i4494
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[3],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[3],"75":[27],"76":[77],"78":[77],"2":[1],"79":[3],"80":[81],"82":[1],"83":[7,1],"28":[27],"84":[7,1],"85":[30,27],"86":[27],"87":[27,25],"88":[53],"89":[61],"90":[81],"91":[92],"93":[1],"94":[27,1],"35":[1,7],"95":[1],"96":[7,1],"97":[27],"98":[7,1],"99":[1],"100":[101],"102":[1],"103":[1],"6":[2],"8":[7,1],"104":[1],"5":[2],"105":[1],"106":[1],"107":[1],"108":[1],"109":[1],"110":[1],"111":[1],"14":[1],"112":[1],"113":[7,1],"114":[1],"115":[1],"116":[1],"117":[1],"11":[7,1],"118":[1],"119":[32],"120":[32],"33":[32],"121":[32],"122":[3],"123":[3],"124":[101],"125":[23],"126":[127],"128":[101]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","CustomizationFlowManager","UnityEngine.UI.Mask","UnityEngine.MonoBehaviour","InfiniteScroller","SkinItemController","SkinOptionData","CharacterSkinMixer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioListener","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.GameObject","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.45f2";

Deserializers.productName = "My project 2D";

Deserializers.lunaInitializationTime = "03/31/2026 11:02:07";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "TestAvatar";

Deserializers.lunaAppID = "38016";

Deserializers.projectId = "80fb75b3ad9af0e4797520c688e132ac";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "c0c62043-737f-45ca-9abe-b2ae56aee5f7";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

