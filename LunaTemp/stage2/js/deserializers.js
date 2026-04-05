var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointSpring' )
  var i563 = data
  i562.spring = i563[0]
  i562.damper = i563[1]
  i562.targetPosition = i563[2]
  return i562
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointMotor' )
  var i565 = data
  i564.m_TargetVelocity = i565[0]
  i564.m_Force = i565[1]
  i564.m_FreeSpin = i565[2]
  return i564
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointLimits' )
  var i567 = data
  i566.m_Min = i567[0]
  i566.m_Max = i567[1]
  i566.m_Bounciness = i567[2]
  i566.m_BounceMinVelocity = i567[3]
  i566.m_ContactDistance = i567[4]
  i566.minBounce = i567[5]
  i566.maxBounce = i567[6]
  return i566
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointDrive' )
  var i569 = data
  i568.m_PositionSpring = i569[0]
  i568.m_PositionDamper = i569[1]
  i568.m_MaximumForce = i569[2]
  return i568
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i571 = data
  i570.m_Spring = i571[0]
  i570.m_Damper = i571[1]
  return i570
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i573 = data
  i572.m_Limit = i573[0]
  i572.m_Bounciness = i573[1]
  i572.m_ContactDistance = i573[2]
  return i572
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i575 = data
  i574.m_ExtremumSlip = i575[0]
  i574.m_ExtremumValue = i575[1]
  i574.m_AsymptoteSlip = i575[2]
  i574.m_AsymptoteValue = i575[3]
  i574.m_Stiffness = i575[4]
  return i574
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i577 = data
  i576.m_LowerAngle = i577[0]
  i576.m_UpperAngle = i577[1]
  return i576
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i579 = data
  i578.m_MotorSpeed = i579[0]
  i578.m_MaximumMotorTorque = i579[1]
  return i578
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i581 = data
  i580.m_DampingRatio = i581[0]
  i580.m_Frequency = i581[1]
  i580.m_Angle = i581[2]
  return i580
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i583 = data
  i582.m_LowerTranslation = i583[0]
  i582.m_UpperTranslation = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i585 = data
  i584.position = new pc.Vec3( i585[0], i585[1], i585[2] )
  i584.scale = new pc.Vec3( i585[3], i585[4], i585[5] )
  i584.rotation = new pc.Quat(i585[6], i585[7], i585[8], i585[9])
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i587 = data
  i586.pivot = new pc.Vec2( i587[0], i587[1] )
  i586.anchorMin = new pc.Vec2( i587[2], i587[3] )
  i586.anchorMax = new pc.Vec2( i587[4], i587[5] )
  i586.sizeDelta = new pc.Vec2( i587[6], i587[7] )
  i586.anchoredPosition3D = new pc.Vec3( i587[8], i587[9], i587[10] )
  i586.rotation = new pc.Quat(i587[11], i587[12], i587[13], i587[14])
  i586.scale = new pc.Vec3( i587[15], i587[16], i587[17] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i589 = data
  i588.planeDistance = i589[0]
  i588.referencePixelsPerUnit = i589[1]
  i588.isFallbackOverlay = !!i589[2]
  i588.renderMode = i589[3]
  i588.renderOrder = i589[4]
  i588.sortingLayerName = i589[5]
  i588.sortingOrder = i589[6]
  i588.scaleFactor = i589[7]
  request.r(i589[8], i589[9], 0, i588, 'worldCamera')
  i588.overrideSorting = !!i589[10]
  i588.pixelPerfect = !!i589[11]
  i588.targetDisplay = i589[12]
  i588.overridePixelPerfect = !!i589[13]
  i588.enabled = !!i589[14]
  return i588
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i591 = data
  i590.m_UiScaleMode = i591[0]
  i590.m_ReferencePixelsPerUnit = i591[1]
  i590.m_ScaleFactor = i591[2]
  i590.m_ReferenceResolution = new pc.Vec2( i591[3], i591[4] )
  i590.m_ScreenMatchMode = i591[5]
  i590.m_MatchWidthOrHeight = i591[6]
  i590.m_PhysicalUnit = i591[7]
  i590.m_FallbackScreenDPI = i591[8]
  i590.m_DefaultSpriteDPI = i591[9]
  i590.m_DynamicPixelsPerUnit = i591[10]
  i590.m_PresetInfoIsWorld = !!i591[11]
  return i590
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i593 = data
  i592.m_IgnoreReversedGraphics = !!i593[0]
  i592.m_BlockingObjects = i593[1]
  i592.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i593[2] )
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i595 = data
  i594.cullTransparentMesh = !!i595[0]
  return i594
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Image' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'm_Sprite')
  i596.m_Type = i597[2]
  i596.m_PreserveAspect = !!i597[3]
  i596.m_FillCenter = !!i597[4]
  i596.m_FillMethod = i597[5]
  i596.m_FillAmount = i597[6]
  i596.m_FillClockwise = !!i597[7]
  i596.m_FillOrigin = i597[8]
  i596.m_UseSpriteMesh = !!i597[9]
  i596.m_PixelsPerUnitMultiplier = i597[10]
  request.r(i597[11], i597[12], 0, i596, 'm_Material')
  i596.m_Maskable = !!i597[13]
  i596.m_Color = new pc.Color(i597[14], i597[15], i597[16], i597[17])
  i596.m_RaycastTarget = !!i597[18]
  i596.m_RaycastPadding = new pc.Vec4( i597[19], i597[20], i597[21], i597[22] )
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i599 = data
  i598.name = i599[0]
  i598.tagId = i599[1]
  i598.enabled = !!i599[2]
  i598.isStatic = !!i599[3]
  i598.layer = i599[4]
  return i598
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Button' )
  var i601 = data
  i600.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i601[0], i600.m_OnClick)
  i600.m_Navigation = request.d('UnityEngine.UI.Navigation', i601[1], i600.m_Navigation)
  i600.m_Transition = i601[2]
  i600.m_Colors = request.d('UnityEngine.UI.ColorBlock', i601[3], i600.m_Colors)
  i600.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i601[4], i600.m_SpriteState)
  i600.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i601[5], i600.m_AnimationTriggers)
  i600.m_Interactable = !!i601[6]
  request.r(i601[7], i601[8], 0, i600, 'm_TargetGraphic')
  return i600
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i603 = data
  i602.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i603[0], i602.m_PersistentCalls)
  return i602
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i605 = data
  var i607 = i605[0]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i607.length; i += 1) {
    i606.add(request.d('UnityEngine.Events.PersistentCall', i607[i + 0]));
  }
  i604.m_Calls = i606
  return i604
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_Target')
  i610.m_TargetAssemblyTypeName = i611[2]
  i610.m_MethodName = i611[3]
  i610.m_Mode = i611[4]
  i610.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i611[5], i610.m_Arguments)
  i610.m_CallState = i611[6]
  return i610
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i613 = data
  i612.m_Mode = i613[0]
  i612.m_WrapAround = !!i613[1]
  request.r(i613[2], i613[3], 0, i612, 'm_SelectOnUp')
  request.r(i613[4], i613[5], 0, i612, 'm_SelectOnDown')
  request.r(i613[6], i613[7], 0, i612, 'm_SelectOnLeft')
  request.r(i613[8], i613[9], 0, i612, 'm_SelectOnRight')
  return i612
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i615 = data
  i614.m_NormalColor = new pc.Color(i615[0], i615[1], i615[2], i615[3])
  i614.m_HighlightedColor = new pc.Color(i615[4], i615[5], i615[6], i615[7])
  i614.m_PressedColor = new pc.Color(i615[8], i615[9], i615[10], i615[11])
  i614.m_SelectedColor = new pc.Color(i615[12], i615[13], i615[14], i615[15])
  i614.m_DisabledColor = new pc.Color(i615[16], i615[17], i615[18], i615[19])
  i614.m_ColorMultiplier = i615[20]
  i614.m_FadeDuration = i615[21]
  return i614
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'm_HighlightedSprite')
  request.r(i617[2], i617[3], 0, i616, 'm_PressedSprite')
  request.r(i617[4], i617[5], 0, i616, 'm_SelectedSprite')
  request.r(i617[6], i617[7], 0, i616, 'm_DisabledSprite')
  return i616
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i619 = data
  i618.m_NormalTrigger = i619[0]
  i618.m_HighlightedTrigger = i619[1]
  i618.m_PressedTrigger = i619[2]
  i618.m_SelectedTrigger = i619[3]
  i618.m_DisabledTrigger = i619[4]
  return i618
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.Text' )
  var i621 = data
  i620.m_FontData = request.d('UnityEngine.UI.FontData', i621[0], i620.m_FontData)
  i620.m_Text = i621[1]
  request.r(i621[2], i621[3], 0, i620, 'm_Material')
  i620.m_Maskable = !!i621[4]
  i620.m_Color = new pc.Color(i621[5], i621[6], i621[7], i621[8])
  i620.m_RaycastTarget = !!i621[9]
  i620.m_RaycastPadding = new pc.Vec4( i621[10], i621[11], i621[12], i621[13] )
  return i620
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.FontData' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'm_Font')
  i622.m_FontSize = i623[2]
  i622.m_FontStyle = i623[3]
  i622.m_BestFit = !!i623[4]
  i622.m_MinSize = i623[5]
  i622.m_MaxSize = i623[6]
  i622.m_Alignment = i623[7]
  i622.m_AlignByGeometry = !!i623[8]
  i622.m_RichText = !!i623[9]
  i622.m_HorizontalOverflow = i623[10]
  i622.m_VerticalOverflow = i623[11]
  i622.m_LineSpacing = i623[12]
  return i622
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'm_ObjectArgument')
  i624.m_ObjectArgumentAssemblyTypeName = i625[2]
  i624.m_IntArgument = i625[3]
  i624.m_FloatArgument = i625[4]
  i624.m_StringArgument = i625[5]
  i624.m_BoolArgument = !!i625[6]
  return i624
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.Mask' )
  var i627 = data
  i626.m_ShowMaskGraphic = !!i627[0]
  return i626
}

Deserializers["InfiniteScroller"] = function (request, data, root) {
  var i628 = root || request.c( 'InfiniteScroller' )
  var i629 = data
  var i631 = i629[0]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.items = i630
  i628.itemSpacing = i629[1]
  i628.decelerationRate = i629[2]
  i628.dragSensitivity = i629[3]
  return i628
}

Deserializers["SkinItemController"] = function (request, data, root) {
  var i634 = root || request.c( 'SkinItemController' )
  var i635 = data
  i634.skinType = i635[0]
  request.r(i635[1], i635[2], 0, i634, 'skinData')
  request.r(i635[3], i635[4], 0, i634, 'thumbnailImage')
  request.r(i635[5], i635[6], 0, i634, 'selectionBorder')
  request.r(i635[7], i635[8], 0, i634, 'skinMixer')
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i637 = data
  i636.name = i637[0]
  i636.width = i637[1]
  i636.height = i637[2]
  i636.mipmapCount = i637[3]
  i636.anisoLevel = i637[4]
  i636.filterMode = i637[5]
  i636.hdr = !!i637[6]
  i636.format = i637[7]
  i636.wrapMode = i637[8]
  i636.alphaIsTransparency = !!i637[9]
  i636.alphaSource = i637[10]
  i636.graphicsFormat = i637[11]
  i636.sRGBTexture = !!i637[12]
  i636.desiredColorSpace = i637[13]
  i636.wrapU = i637[14]
  i636.wrapV = i637[15]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i638 = root || new pc.UnityMaterial()
  var i639 = data
  i638.name = i639[0]
  request.r(i639[1], i639[2], 0, i638, 'shader')
  i638.renderQueue = i639[3]
  i638.enableInstancing = !!i639[4]
  var i641 = i639[5]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i641[i + 0]) );
  }
  i638.floatParameters = i640
  var i643 = i639[6]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i643[i + 0]) );
  }
  i638.colorParameters = i642
  var i645 = i639[7]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i645[i + 0]) );
  }
  i638.vectorParameters = i644
  var i647 = i639[8]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i647[i + 0]) );
  }
  i638.textureParameters = i646
  var i649 = i639[9]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i649[i + 0]) );
  }
  i638.materialFlags = i648
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i653 = data
  i652.name = i653[0]
  i652.value = i653[1]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i657 = data
  i656.name = i657[0]
  i656.value = new pc.Color(i657[1], i657[2], i657[3], i657[4])
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i661 = data
  i660.name = i661[0]
  i660.value = new pc.Vec4( i661[1], i661[2], i661[3], i661[4] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i665 = data
  i664.name = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'value')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i669 = data
  i668.name = i669[0]
  i668.enabled = !!i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i671 = data
  i670.name = i671[0]
  i670.halfPrecision = !!i671[1]
  i670.useSimplification = !!i671[2]
  i670.useUInt32IndexFormat = !!i671[3]
  i670.vertexCount = i671[4]
  i670.aabb = i671[5]
  var i673 = i671[6]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( !!i673[i + 0] );
  }
  i670.streams = i672
  i670.vertices = i671[7]
  var i675 = i671[8]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i675[i + 0]) );
  }
  i670.subMeshes = i674
  var i677 = i671[9]
  var i676 = []
  for(var i = 0; i < i677.length; i += 16) {
    i676.push( new pc.Mat4().setData(i677[i + 0], i677[i + 1], i677[i + 2], i677[i + 3],  i677[i + 4], i677[i + 5], i677[i + 6], i677[i + 7],  i677[i + 8], i677[i + 9], i677[i + 10], i677[i + 11],  i677[i + 12], i677[i + 13], i677[i + 14], i677[i + 15]) );
  }
  i670.bindposes = i676
  var i679 = i671[10]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i679[i + 0]) );
  }
  i670.blendShapes = i678
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i685 = data
  i684.triangles = i685[0]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i691 = data
  i690.name = i691[0]
  var i693 = i691[1]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i693[i + 0]) );
  }
  i690.frames = i692
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i695 = data
  i694.name = i695[0]
  i694.index = i695[1]
  i694.startup = !!i695[2]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i697 = data
  i696.aspect = i697[0]
  i696.orthographic = !!i697[1]
  i696.orthographicSize = i697[2]
  i696.backgroundColor = new pc.Color(i697[3], i697[4], i697[5], i697[6])
  i696.nearClipPlane = i697[7]
  i696.farClipPlane = i697[8]
  i696.fieldOfView = i697[9]
  i696.depth = i697[10]
  i696.clearFlags = i697[11]
  i696.cullingMask = i697[12]
  i696.rect = i697[13]
  request.r(i697[14], i697[15], 0, i696, 'targetTexture')
  i696.usePhysicalProperties = !!i697[16]
  i696.focalLength = i697[17]
  i696.sensorSize = new pc.Vec2( i697[18], i697[19] )
  i696.lensShift = new pc.Vec2( i697[20], i697[21] )
  i696.gateFit = i697[22]
  i696.commandBufferCount = i697[23]
  i696.cameraType = i697[24]
  i696.enabled = !!i697[25]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i699 = data
  i698.color = new pc.Color(i699[0], i699[1], i699[2], i699[3])
  request.r(i699[4], i699[5], 0, i698, 'sprite')
  i698.flipX = !!i699[6]
  i698.flipY = !!i699[7]
  i698.drawMode = i699[8]
  i698.size = new pc.Vec2( i699[9], i699[10] )
  i698.tileMode = i699[11]
  i698.adaptiveModeThreshold = i699[12]
  i698.maskInteraction = i699[13]
  i698.spriteSortPoint = i699[14]
  i698.enabled = !!i699[15]
  request.r(i699[16], i699[17], 0, i698, 'sharedMaterial')
  var i701 = i699[18]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.sharedMaterials = i700
  i698.receiveShadows = !!i699[19]
  i698.shadowCastingMode = i699[20]
  i698.sortingLayerID = i699[21]
  i698.sortingOrder = i699[22]
  i698.lightmapIndex = i699[23]
  i698.lightmapSceneIndex = i699[24]
  i698.lightmapScaleOffset = new pc.Vec4( i699[25], i699[26], i699[27], i699[28] )
  i698.lightProbeUsage = i699[29]
  i698.reflectionProbeUsage = i699[30]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'sharedMesh')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'additionalVertexStreams')
  i706.enabled = !!i707[2]
  request.r(i707[3], i707[4], 0, i706, 'sharedMaterial')
  var i709 = i707[5]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.sharedMaterials = i708
  i706.receiveShadows = !!i707[6]
  i706.shadowCastingMode = i707[7]
  i706.sortingLayerID = i707[8]
  i706.sortingOrder = i707[9]
  i706.lightmapIndex = i707[10]
  i706.lightmapSceneIndex = i707[11]
  i706.lightmapScaleOffset = new pc.Vec4( i707[12], i707[13], i707[14], i707[15] )
  i706.lightProbeUsage = i707[16]
  i706.reflectionProbeUsage = i707[17]
  return i706
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i710 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i711 = data
  i710.loop = !!i711[0]
  i710.timeScale = i711[1]
  request.r(i711[2], i711[3], 0, i710, 'skeletonDataAsset')
  i710.initialSkinName = i711[4]
  i710.fixPrefabOverrideViaMeshFilter = i711[5]
  i710.initialFlipX = !!i711[6]
  i710.initialFlipY = !!i711[7]
  i710.updateWhenInvisible = i711[8]
  i710.zSpacing = i711[9]
  i710.useClipping = !!i711[10]
  i710.immutableTriangles = !!i711[11]
  i710.pmaVertexColors = !!i711[12]
  i710.clearStateOnDisable = !!i711[13]
  i710.tintBlack = !!i711[14]
  i710.singleSubmesh = !!i711[15]
  i710.fixDrawOrder = !!i711[16]
  i710.addNormals = !!i711[17]
  i710.calculateTangents = !!i711[18]
  i710.maskInteraction = i711[19]
  i710.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i711[20], i710.maskMaterials)
  i710.disableRenderingOnOverride = !!i711[21]
  i710.updateTiming = i711[22]
  i710.unscaledTime = !!i711[23]
  i710._animationName = i711[24]
  var i713 = i711[25]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i710.separatorSlotNames = i712
  return i710
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i714 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i715 = data
  var i717 = i715[0]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i714.materialsMaskDisabled = i716
  var i719 = i715[1]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i714.materialsInsideMask = i718
  var i721 = i715[2]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i714.materialsOutsideMask = i720
  return i714
}

Deserializers["CharacterSkinMixer"] = function (request, data, root) {
  var i724 = root || request.c( 'CharacterSkinMixer' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'skeletonAnimation')
  i724.bodySkinName = i725[2]
  i724.mouthSkinName = i725[3]
  i724.eyeBrowName = i725[4]
  i724.currentEyeSkin = i725[5]
  i724.currentEyelidSkin = i725[6]
  i724.currentHairBackSkin = i725[7]
  i724.currentHairFrontSkin = i725[8]
  i724.currentOutfitSkin = i725[9]
  i724.currentShoeSkin = i725[10]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'animatorController')
  request.r(i727[2], i727[3], 0, i726, 'avatar')
  i726.updateMode = i727[4]
  i726.hasTransformHierarchy = !!i727[5]
  i726.applyRootMotion = !!i727[6]
  var i729 = i727[7]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.humanBones = i728
  i726.enabled = !!i727[8]
  return i726
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_FirstSelected')
  i732.m_sendNavigationEvents = !!i733[2]
  i732.m_DragThreshold = i733[3]
  return i732
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i735 = data
  i734.m_HorizontalAxis = i735[0]
  i734.m_VerticalAxis = i735[1]
  i734.m_SubmitButton = i735[2]
  i734.m_CancelButton = i735[3]
  i734.m_InputActionsPerSecond = i735[4]
  i734.m_RepeatDelay = i735[5]
  i734.m_ForceModuleActive = !!i735[6]
  i734.m_SendPointerHoverToParent = !!i735[7]
  return i734
}

Deserializers["CustomizationFlowManager"] = function (request, data, root) {
  var i736 = root || request.c( 'CustomizationFlowManager' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'portraitCanvas')
  request.r(i737[2], i737[3], 0, i736, 'p_eyeScroller')
  request.r(i737[4], i737[5], 0, i736, 'p_hairScroller')
  request.r(i737[6], i737[7], 0, i736, 'p_clothesScroller')
  request.r(i737[8], i737[9], 0, i736, 'p_shoeScroller')
  request.r(i737[10], i737[11], 0, i736, 'p_btnNext')
  request.r(i737[12], i737[13], 0, i736, 'p_btnDone')
  request.r(i737[14], i737[15], 0, i736, 'p_endGamePanel')
  request.r(i737[16], i737[17], 0, i736, 'landscapeCanvas')
  request.r(i737[18], i737[19], 0, i736, 'l_eyeScroller')
  request.r(i737[20], i737[21], 0, i736, 'l_hairScroller')
  request.r(i737[22], i737[23], 0, i736, 'l_clothesScroller')
  request.r(i737[24], i737[25], 0, i736, 'l_shoeScroller')
  request.r(i737[26], i737[27], 0, i736, 'l_btnNext')
  request.r(i737[28], i737[29], 0, i736, 'l_btnDone')
  request.r(i737[30], i737[31], 0, i736, 'l_endGamePanel')
  request.r(i737[32], i737[33], 0, i736, 'characterSpine')
  i736.danceAnimationName = i737[34]
  return i736
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i738 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i739 = data
  i738.m_hasFontAssetChanged = !!i739[0]
  request.r(i739[1], i739[2], 0, i738, 'm_baseMaterial')
  i738.m_maskOffset = new pc.Vec4( i739[3], i739[4], i739[5], i739[6] )
  i738.m_text = i739[7]
  i738.m_isRightToLeft = !!i739[8]
  request.r(i739[9], i739[10], 0, i738, 'm_fontAsset')
  request.r(i739[11], i739[12], 0, i738, 'm_sharedMaterial')
  var i741 = i739[13]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.m_fontSharedMaterials = i740
  request.r(i739[14], i739[15], 0, i738, 'm_fontMaterial')
  var i743 = i739[16]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i738.m_fontMaterials = i742
  i738.m_fontColor32 = UnityEngine.Color32.ConstructColor(i739[17], i739[18], i739[19], i739[20])
  i738.m_fontColor = new pc.Color(i739[21], i739[22], i739[23], i739[24])
  i738.m_enableVertexGradient = !!i739[25]
  i738.m_colorMode = i739[26]
  i738.m_fontColorGradient = request.d('TMPro.VertexGradient', i739[27], i738.m_fontColorGradient)
  request.r(i739[28], i739[29], 0, i738, 'm_fontColorGradientPreset')
  request.r(i739[30], i739[31], 0, i738, 'm_spriteAsset')
  i738.m_tintAllSprites = !!i739[32]
  request.r(i739[33], i739[34], 0, i738, 'm_StyleSheet')
  i738.m_TextStyleHashCode = i739[35]
  i738.m_overrideHtmlColors = !!i739[36]
  i738.m_faceColor = UnityEngine.Color32.ConstructColor(i739[37], i739[38], i739[39], i739[40])
  i738.m_fontSize = i739[41]
  i738.m_fontSizeBase = i739[42]
  i738.m_fontWeight = i739[43]
  i738.m_enableAutoSizing = !!i739[44]
  i738.m_fontSizeMin = i739[45]
  i738.m_fontSizeMax = i739[46]
  i738.m_fontStyle = i739[47]
  i738.m_HorizontalAlignment = i739[48]
  i738.m_VerticalAlignment = i739[49]
  i738.m_textAlignment = i739[50]
  i738.m_characterSpacing = i739[51]
  i738.m_wordSpacing = i739[52]
  i738.m_lineSpacing = i739[53]
  i738.m_lineSpacingMax = i739[54]
  i738.m_paragraphSpacing = i739[55]
  i738.m_charWidthMaxAdj = i739[56]
  i738.m_enableWordWrapping = !!i739[57]
  i738.m_wordWrappingRatios = i739[58]
  i738.m_overflowMode = i739[59]
  request.r(i739[60], i739[61], 0, i738, 'm_linkedTextComponent')
  request.r(i739[62], i739[63], 0, i738, 'parentLinkedComponent')
  i738.m_enableKerning = !!i739[64]
  i738.m_enableExtraPadding = !!i739[65]
  i738.checkPaddingRequired = !!i739[66]
  i738.m_isRichText = !!i739[67]
  i738.m_parseCtrlCharacters = !!i739[68]
  i738.m_isOrthographic = !!i739[69]
  i738.m_isCullingEnabled = !!i739[70]
  i738.m_horizontalMapping = i739[71]
  i738.m_verticalMapping = i739[72]
  i738.m_uvLineOffset = i739[73]
  i738.m_geometrySortingOrder = i739[74]
  i738.m_IsTextObjectScaleStatic = !!i739[75]
  i738.m_VertexBufferAutoSizeReduction = !!i739[76]
  i738.m_useMaxVisibleDescender = !!i739[77]
  i738.m_pageToDisplay = i739[78]
  i738.m_margin = new pc.Vec4( i739[79], i739[80], i739[81], i739[82] )
  i738.m_isUsingLegacyAnimationComponent = !!i739[83]
  i738.m_isVolumetricText = !!i739[84]
  request.r(i739[85], i739[86], 0, i738, 'm_Material')
  i738.m_Maskable = !!i739[87]
  i738.m_Color = new pc.Color(i739[88], i739[89], i739[90], i739[91])
  i738.m_RaycastTarget = !!i739[92]
  i738.m_RaycastPadding = new pc.Vec4( i739[93], i739[94], i739[95], i739[96] )
  return i738
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i744 = root || request.c( 'TMPro.VertexGradient' )
  var i745 = data
  i744.topLeft = new pc.Color(i745[0], i745[1], i745[2], i745[3])
  i744.topRight = new pc.Color(i745[4], i745[5], i745[6], i745[7])
  i744.bottomLeft = new pc.Color(i745[8], i745[9], i745[10], i745[11])
  i744.bottomRight = new pc.Color(i745[12], i745[13], i745[14], i745[15])
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i747 = data
  i746.ambientIntensity = i747[0]
  i746.reflectionIntensity = i747[1]
  i746.ambientMode = i747[2]
  i746.ambientLight = new pc.Color(i747[3], i747[4], i747[5], i747[6])
  i746.ambientSkyColor = new pc.Color(i747[7], i747[8], i747[9], i747[10])
  i746.ambientGroundColor = new pc.Color(i747[11], i747[12], i747[13], i747[14])
  i746.ambientEquatorColor = new pc.Color(i747[15], i747[16], i747[17], i747[18])
  i746.fogColor = new pc.Color(i747[19], i747[20], i747[21], i747[22])
  i746.fogEndDistance = i747[23]
  i746.fogStartDistance = i747[24]
  i746.fogDensity = i747[25]
  i746.fog = !!i747[26]
  request.r(i747[27], i747[28], 0, i746, 'skybox')
  i746.fogMode = i747[29]
  var i749 = i747[30]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i749[i + 0]) );
  }
  i746.lightmaps = i748
  i746.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i747[31], i746.lightProbes)
  i746.lightmapsMode = i747[32]
  i746.mixedBakeMode = i747[33]
  i746.environmentLightingMode = i747[34]
  i746.ambientProbe = new pc.SphericalHarmonicsL2(i747[35])
  i746.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i747[36])
  i746.useReferenceAmbientProbe = !!i747[37]
  request.r(i747[38], i747[39], 0, i746, 'customReflection')
  request.r(i747[40], i747[41], 0, i746, 'defaultReflection')
  i746.defaultReflectionMode = i747[42]
  i746.defaultReflectionResolution = i747[43]
  i746.sunLightObjectId = i747[44]
  i746.pixelLightCount = i747[45]
  i746.defaultReflectionHDR = !!i747[46]
  i746.hasLightDataAsset = !!i747[47]
  i746.hasManualGenerate = !!i747[48]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'lightmapColor')
  request.r(i753[2], i753[3], 0, i752, 'lightmapDirection')
  request.r(i753[4], i753[5], 0, i752, 'shadowMask')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i754 = root || new UnityEngine.LightProbes()
  var i755 = data
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i763 = data
  var i765 = i763[0]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i765[i + 0]));
  }
  i762.ShaderCompilationErrors = i764
  i762.name = i763[1]
  i762.guid = i763[2]
  var i767 = i763[3]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i762.shaderDefinedKeywords = i766
  var i769 = i763[4]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i769[i + 0]) );
  }
  i762.passes = i768
  var i771 = i763[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i771[i + 0]) );
  }
  i762.usePasses = i770
  var i773 = i763[6]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i773[i + 0]) );
  }
  i762.defaultParameterValues = i772
  request.r(i763[7], i763[8], 0, i762, 'unityFallbackShader')
  i762.readDepth = !!i763[9]
  i762.hasDepthOnlyPass = !!i763[10]
  i762.isCreatedByShaderGraph = !!i763[11]
  i762.disableBatching = !!i763[12]
  i762.compiled = !!i763[13]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i777 = data
  i776.shaderName = i777[0]
  i776.errorMessage = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i780 = root || new pc.UnityShaderPass()
  var i781 = data
  i780.id = i781[0]
  i780.subShaderIndex = i781[1]
  i780.name = i781[2]
  i780.passType = i781[3]
  i780.grabPassTextureName = i781[4]
  i780.usePass = !!i781[5]
  i780.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[6], i780.zTest)
  i780.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[7], i780.zWrite)
  i780.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[8], i780.culling)
  i780.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i781[9], i780.blending)
  i780.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i781[10], i780.alphaBlending)
  i780.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[11], i780.colorWriteMask)
  i780.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[12], i780.offsetUnits)
  i780.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[13], i780.offsetFactor)
  i780.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[14], i780.stencilRef)
  i780.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[15], i780.stencilReadMask)
  i780.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[16], i780.stencilWriteMask)
  i780.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i781[17], i780.stencilOp)
  i780.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i781[18], i780.stencilOpFront)
  i780.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i781[19], i780.stencilOpBack)
  var i783 = i781[20]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i783[i + 0]) );
  }
  i780.tags = i782
  var i785 = i781[21]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i780.passDefinedKeywords = i784
  var i787 = i781[22]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i787[i + 0]) );
  }
  i780.passDefinedKeywordGroups = i786
  var i789 = i781[23]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i789[i + 0]) );
  }
  i780.variants = i788
  var i791 = i781[24]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i791[i + 0]) );
  }
  i780.excludedVariants = i790
  i780.hasDepthReader = !!i781[25]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i793 = data
  i792.val = i793[0]
  i792.name = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i795 = data
  i794.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[0], i794.src)
  i794.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[1], i794.dst)
  i794.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[2], i794.op)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i797 = data
  i796.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[0], i796.pass)
  i796.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[1], i796.fail)
  i796.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[2], i796.zFail)
  i796.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[3], i796.comp)
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i801 = data
  i800.name = i801[0]
  i800.value = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i804.keywords = i806
  i804.hasDiscard = !!i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i811 = data
  i810.passId = i811[0]
  i810.subShaderIndex = i811[1]
  var i813 = i811[2]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i810.keywords = i812
  i810.vertexProgram = i811[3]
  i810.fragmentProgram = i811[4]
  i810.exportedForWebGl2 = !!i811[5]
  i810.readDepth = !!i811[6]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'shader')
  i816.pass = i817[2]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i821 = data
  i820.name = i821[0]
  i820.type = i821[1]
  i820.value = new pc.Vec4( i821[2], i821[3], i821[4], i821[5] )
  i820.textureValue = i821[6]
  i820.shaderPropertyFlag = i821[7]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i823 = data
  i822.name = i823[0]
  request.r(i823[1], i823[2], 0, i822, 'texture')
  i822.aabb = i823[3]
  i822.vertices = i823[4]
  i822.triangles = i823[5]
  i822.textureRect = UnityEngine.Rect.MinMaxRect(i823[6], i823[7], i823[8], i823[9])
  i822.packedRect = UnityEngine.Rect.MinMaxRect(i823[10], i823[11], i823[12], i823[13])
  i822.border = new pc.Vec4( i823[14], i823[15], i823[16], i823[17] )
  i822.transparency = i823[18]
  i822.bounds = i823[19]
  i822.pixelsPerUnit = i823[20]
  i822.textureWidth = i823[21]
  i822.textureHeight = i823[22]
  i822.nativeSize = new pc.Vec2( i823[23], i823[24] )
  i822.pivot = new pc.Vec2( i823[25], i823[26] )
  i822.textureRectOffset = new pc.Vec2( i823[27], i823[28] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i825 = data
  i824.name = i825[0]
  i824.wrapMode = i825[1]
  i824.isLooping = !!i825[2]
  i824.length = i825[3]
  var i827 = i825[4]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i827[i + 0]) );
  }
  i824.curves = i826
  var i829 = i825[5]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i829[i + 0]) );
  }
  i824.events = i828
  i824.halfPrecision = !!i825[6]
  i824._frameRate = i825[7]
  i824.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i825[8], i824.localBounds)
  i824.hasMuscleCurves = !!i825[9]
  var i831 = i825[10]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( i831[i + 0] );
  }
  i824.clipMuscleConstant = i830
  i824.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i825[11], i824.clipBindingConstant)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i835 = data
  i834.path = i835[0]
  i834.hash = i835[1]
  i834.componentType = i835[2]
  i834.property = i835[3]
  i834.keys = i835[4]
  var i837 = i835[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i837[i + 0]) );
  }
  i834.objectReferenceKeys = i836
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i841 = data
  i840.time = i841[0]
  request.r(i841[1], i841[2], 0, i840, 'value')
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i845 = data
  i844.functionName = i845[0]
  i844.floatParameter = i845[1]
  i844.intParameter = i845[2]
  i844.stringParameter = i845[3]
  request.r(i845[4], i845[5], 0, i844, 'objectReferenceParameter')
  i844.time = i845[6]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i847 = data
  i846.center = new pc.Vec3( i847[0], i847[1], i847[2] )
  i846.extends = new pc.Vec3( i847[3], i847[4], i847[5] )
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i850.genericBindings = i852
  var i855 = i851[1]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i850.pptrCurveMapping = i854
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i857 = data
  i856.name = i857[0]
  i856.ascent = i857[1]
  i856.originalLineHeight = i857[2]
  i856.fontSize = i857[3]
  var i859 = i857[4]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i859[i + 0]) );
  }
  i856.characterInfo = i858
  request.r(i857[5], i857[6], 0, i856, 'texture')
  i856.originalFontSize = i857[7]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i863 = data
  i862.index = i863[0]
  i862.advance = i863[1]
  i862.bearing = i863[2]
  i862.glyphWidth = i863[3]
  i862.glyphHeight = i863[4]
  i862.minX = i863[5]
  i862.maxX = i863[6]
  i862.minY = i863[7]
  i862.maxY = i863[8]
  i862.uvBottomLeftX = i863[9]
  i862.uvBottomLeftY = i863[10]
  i862.uvBottomRightX = i863[11]
  i862.uvBottomRightY = i863[12]
  i862.uvTopLeftX = i863[13]
  i862.uvTopLeftY = i863[14]
  i862.uvTopRightX = i863[15]
  i862.uvTopRightY = i863[16]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i865 = data
  i864.name = i865[0]
  var i867 = i865[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i867[i + 0]) );
  }
  i864.layers = i866
  var i869 = i865[2]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i869[i + 0]) );
  }
  i864.parameters = i868
  i864.animationClips = i865[3]
  i864.avatarUnsupported = i865[4]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i873 = data
  i872.name = i873[0]
  i872.defaultWeight = i873[1]
  i872.blendingMode = i873[2]
  i872.avatarMask = i873[3]
  i872.syncedLayerIndex = i873[4]
  i872.syncedLayerAffectsTiming = !!i873[5]
  i872.syncedLayers = i873[6]
  i872.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i873[7], i872.stateMachine)
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i875 = data
  i874.id = i875[0]
  i874.name = i875[1]
  i874.path = i875[2]
  var i877 = i875[3]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i877[i + 0]) );
  }
  i874.states = i876
  var i879 = i875[4]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i879[i + 0]) );
  }
  i874.machines = i878
  var i881 = i875[5]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i881[i + 0]) );
  }
  i874.entryStateTransitions = i880
  var i883 = i875[6]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i883[i + 0]) );
  }
  i874.exitStateTransitions = i882
  var i885 = i875[7]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i885[i + 0]) );
  }
  i874.anyStateTransitions = i884
  i874.defaultStateId = i875[8]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i889 = data
  i888.id = i889[0]
  i888.name = i889[1]
  i888.cycleOffset = i889[2]
  i888.cycleOffsetParameter = i889[3]
  i888.cycleOffsetParameterActive = !!i889[4]
  i888.mirror = !!i889[5]
  i888.mirrorParameter = i889[6]
  i888.mirrorParameterActive = !!i889[7]
  i888.motionId = i889[8]
  i888.nameHash = i889[9]
  i888.fullPathHash = i889[10]
  i888.speed = i889[11]
  i888.speedParameter = i889[12]
  i888.speedParameterActive = !!i889[13]
  i888.tag = i889[14]
  i888.tagHash = i889[15]
  i888.writeDefaultValues = !!i889[16]
  var i891 = i889[17]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.behaviours = i890
  var i893 = i889[18]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i893[i + 0]) );
  }
  i888.transitions = i892
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i899 = data
  i898.fullPath = i899[0]
  i898.canTransitionToSelf = !!i899[1]
  i898.duration = i899[2]
  i898.exitTime = i899[3]
  i898.hasExitTime = !!i899[4]
  i898.hasFixedDuration = !!i899[5]
  i898.interruptionSource = i899[6]
  i898.offset = i899[7]
  i898.orderedInterruption = !!i899[8]
  i898.destinationStateId = i899[9]
  i898.isExit = !!i899[10]
  i898.mute = !!i899[11]
  i898.solo = !!i899[12]
  var i901 = i899[13]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i901[i + 0]) );
  }
  i898.conditions = i900
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i907 = data
  i906.destinationStateId = i907[0]
  i906.isExit = !!i907[1]
  i906.mute = !!i907[2]
  i906.solo = !!i907[3]
  var i909 = i907[4]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i909[i + 0]) );
  }
  i906.conditions = i908
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i913 = data
  i912.defaultBool = !!i913[0]
  i912.defaultFloat = i913[1]
  i912.defaultInt = i913[2]
  i912.name = i913[3]
  i912.nameHash = i913[4]
  i912.type = i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i915 = data
  i914.name = i915[0]
  i914.bytes64 = i915[1]
  i914.data = i915[2]
  return i914
}

Deserializers["SkinOptionData"] = function (request, data, root) {
  var i916 = root || request.c( 'SkinOptionData' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'thumbnail')
  i916.primarySkinName = i917[2]
  i916.secondarySkinName = i917[3]
  return i916
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i918 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.atlasAssets = i920
  i918.scale = i919[1]
  request.r(i919[2], i919[3], 0, i918, 'skeletonJSON')
  i918.isUpgradingBlendModeMaterials = !!i919[4]
  i918.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i919[5], i918.blendModeMaterials)
  var i923 = i919[6]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 1, i922, '')
  }
  i918.skeletonDataModifiers = i922
  var i925 = i919[7]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i918.fromAnimation = i924
  var i927 = i919[8]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i918.toAnimation = i926
  i918.duration = i919[9]
  i918.defaultMix = i919[10]
  request.r(i919[11], i919[12], 0, i918, 'controller')
  return i918
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i930 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i931 = data
  i930.applyAdditiveMaterial = !!i931[0]
  var i933 = i931[1]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i933[i + 0]));
  }
  i930.additiveMaterials = i932
  var i935 = i931[2]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i935[i + 0]));
  }
  i930.multiplyMaterials = i934
  var i937 = i931[3]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i937[i + 0]));
  }
  i930.screenMaterials = i936
  i930.requiresBlendModeMaterials = !!i931[4]
  return i930
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i940 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i941 = data
  i940.pageName = i941[0]
  request.r(i941[1], i941[2], 0, i940, 'material')
  return i940
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i944 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'atlasFile')
  var i947 = i945[2]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i944.materials = i946
  i944.textureLoadingMode = i945[3]
  request.r(i945[4], i945[5], 0, i944, 'onDemandTextureLoader')
  return i944
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'atlas')
  i948.normalStyle = i949[2]
  i948.normalSpacingOffset = i949[3]
  i948.boldStyle = i949[4]
  i948.boldSpacing = i949[5]
  i948.italicStyle = i949[6]
  i948.tabSize = i949[7]
  i948.hashCode = i949[8]
  request.r(i949[9], i949[10], 0, i948, 'material')
  i948.materialHashCode = i949[11]
  i948.m_Version = i949[12]
  i948.m_SourceFontFileGUID = i949[13]
  request.r(i949[14], i949[15], 0, i948, 'm_SourceFontFile_EditorRef')
  request.r(i949[16], i949[17], 0, i948, 'm_SourceFontFile')
  i948.m_AtlasPopulationMode = i949[18]
  i948.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i949[19], i948.m_FaceInfo)
  var i951 = i949[20]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('UnityEngine.TextCore.Glyph', i951[i + 0]));
  }
  i948.m_GlyphTable = i950
  var i953 = i949[21]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.TMP_Character', i953[i + 0]));
  }
  i948.m_CharacterTable = i952
  var i955 = i949[22]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i948.m_AtlasTextures = i954
  i948.m_AtlasTextureIndex = i949[23]
  i948.m_IsMultiAtlasTexturesEnabled = !!i949[24]
  i948.m_ClearDynamicDataOnBuild = !!i949[25]
  var i957 = i949[26]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('UnityEngine.TextCore.GlyphRect', i957[i + 0]));
  }
  i948.m_UsedGlyphRects = i956
  var i959 = i949[27]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('UnityEngine.TextCore.GlyphRect', i959[i + 0]));
  }
  i948.m_FreeGlyphRects = i958
  i948.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i949[28], i948.m_fontInfo)
  i948.m_AtlasWidth = i949[29]
  i948.m_AtlasHeight = i949[30]
  i948.m_AtlasPadding = i949[31]
  i948.m_AtlasRenderMode = i949[32]
  var i961 = i949[33]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('TMPro.TMP_Glyph', i961[i + 0]));
  }
  i948.m_glyphInfoList = i960
  i948.m_KerningTable = request.d('TMPro.KerningTable', i949[34], i948.m_KerningTable)
  i948.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i949[35], i948.m_FontFeatureTable)
  var i963 = i949[36]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 1, i962, '')
  }
  i948.fallbackFontAssets = i962
  var i965 = i949[37]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i948.m_FallbackFontAssetTable = i964
  i948.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i949[38], i948.m_CreationSettings)
  var i967 = i949[39]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('TMPro.TMP_FontWeightPair', i967[i + 0]) );
  }
  i948.m_FontWeightTable = i966
  var i969 = i949[40]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('TMPro.TMP_FontWeightPair', i969[i + 0]) );
  }
  i948.fontWeights = i968
  return i948
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i971 = data
  i970.m_FaceIndex = i971[0]
  i970.m_FamilyName = i971[1]
  i970.m_StyleName = i971[2]
  i970.m_PointSize = i971[3]
  i970.m_Scale = i971[4]
  i970.m_UnitsPerEM = i971[5]
  i970.m_LineHeight = i971[6]
  i970.m_AscentLine = i971[7]
  i970.m_CapLine = i971[8]
  i970.m_MeanLine = i971[9]
  i970.m_Baseline = i971[10]
  i970.m_DescentLine = i971[11]
  i970.m_SuperscriptOffset = i971[12]
  i970.m_SuperscriptSize = i971[13]
  i970.m_SubscriptOffset = i971[14]
  i970.m_SubscriptSize = i971[15]
  i970.m_UnderlineOffset = i971[16]
  i970.m_UnderlineThickness = i971[17]
  i970.m_StrikethroughOffset = i971[18]
  i970.m_StrikethroughThickness = i971[19]
  i970.m_TabWidth = i971[20]
  return i970
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i975 = data
  i974.m_Index = i975[0]
  i974.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i975[1], i974.m_Metrics)
  i974.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i975[2], i974.m_GlyphRect)
  i974.m_Scale = i975[3]
  i974.m_AtlasIndex = i975[4]
  i974.m_ClassDefinitionType = i975[5]
  return i974
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i977 = data
  i976.m_Width = i977[0]
  i976.m_Height = i977[1]
  i976.m_HorizontalBearingX = i977[2]
  i976.m_HorizontalBearingY = i977[3]
  i976.m_HorizontalAdvance = i977[4]
  return i976
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i979 = data
  i978.m_X = i979[0]
  i978.m_Y = i979[1]
  i978.m_Width = i979[2]
  i978.m_Height = i979[3]
  return i978
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_Character' )
  var i983 = data
  i982.m_ElementType = i983[0]
  i982.m_Unicode = i983[1]
  i982.m_GlyphIndex = i983[2]
  i982.m_Scale = i983[3]
  return i982
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i989 = data
  i988.Name = i989[0]
  i988.PointSize = i989[1]
  i988.Scale = i989[2]
  i988.CharacterCount = i989[3]
  i988.LineHeight = i989[4]
  i988.Baseline = i989[5]
  i988.Ascender = i989[6]
  i988.CapHeight = i989[7]
  i988.Descender = i989[8]
  i988.CenterLine = i989[9]
  i988.SuperscriptOffset = i989[10]
  i988.SubscriptOffset = i989[11]
  i988.SubSize = i989[12]
  i988.Underline = i989[13]
  i988.UnderlineThickness = i989[14]
  i988.strikethrough = i989[15]
  i988.strikethroughThickness = i989[16]
  i988.TabWidth = i989[17]
  i988.Padding = i989[18]
  i988.AtlasWidth = i989[19]
  i988.AtlasHeight = i989[20]
  return i988
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_Glyph' )
  var i993 = data
  i992.id = i993[0]
  i992.x = i993[1]
  i992.y = i993[2]
  i992.width = i993[3]
  i992.height = i993[4]
  i992.xOffset = i993[5]
  i992.yOffset = i993[6]
  i992.xAdvance = i993[7]
  i992.scale = i993[8]
  return i992
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.KerningTable' )
  var i995 = data
  var i997 = i995[0]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('TMPro.KerningPair', i997[i + 0]));
  }
  i994.kerningPairs = i996
  return i994
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.KerningPair' )
  var i1001 = data
  i1000.xOffset = i1001[0]
  i1000.m_FirstGlyph = i1001[1]
  i1000.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1001[2], i1000.m_FirstGlyphAdjustments)
  i1000.m_SecondGlyph = i1001[3]
  i1000.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1001[4], i1000.m_SecondGlyphAdjustments)
  i1000.m_IgnoreSpacingAdjustments = !!i1001[5]
  return i1000
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1005[i + 0]));
  }
  i1002.m_GlyphPairAdjustmentRecords = i1004
  return i1002
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1009 = data
  i1008.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1009[0], i1008.m_FirstAdjustmentRecord)
  i1008.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1009[1], i1008.m_SecondAdjustmentRecord)
  i1008.m_FeatureLookupFlags = i1009[2]
  return i1008
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1011 = data
  i1010.m_GlyphIndex = i1011[0]
  i1010.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1011[1], i1010.m_GlyphValueRecord)
  return i1010
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1013 = data
  i1012.m_XPlacement = i1013[0]
  i1012.m_YPlacement = i1013[1]
  i1012.m_XAdvance = i1013[2]
  i1012.m_YAdvance = i1013[3]
  return i1012
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1017 = data
  i1016.sourceFontFileName = i1017[0]
  i1016.sourceFontFileGUID = i1017[1]
  i1016.pointSizeSamplingMode = i1017[2]
  i1016.pointSize = i1017[3]
  i1016.padding = i1017[4]
  i1016.packingMode = i1017[5]
  i1016.atlasWidth = i1017[6]
  i1016.atlasHeight = i1017[7]
  i1016.characterSetSelectionMode = i1017[8]
  i1016.characterSequence = i1017[9]
  i1016.referencedFontAssetGUID = i1017[10]
  i1016.referencedTextAssetGUID = i1017[11]
  i1016.fontStyle = i1017[12]
  i1016.fontStyleModifier = i1017[13]
  i1016.renderMode = i1017[14]
  i1016.includeFontFeatures = !!i1017[15]
  return i1016
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'regularTypeface')
  request.r(i1021[2], i1021[3], 0, i1020, 'italicTypeface')
  return i1020
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_Settings' )
  var i1023 = data
  i1022.m_enableWordWrapping = !!i1023[0]
  i1022.m_enableKerning = !!i1023[1]
  i1022.m_enableExtraPadding = !!i1023[2]
  i1022.m_enableTintAllSprites = !!i1023[3]
  i1022.m_enableParseEscapeCharacters = !!i1023[4]
  i1022.m_EnableRaycastTarget = !!i1023[5]
  i1022.m_GetFontFeaturesAtRuntime = !!i1023[6]
  i1022.m_missingGlyphCharacter = i1023[7]
  i1022.m_warningsDisabled = !!i1023[8]
  request.r(i1023[9], i1023[10], 0, i1022, 'm_defaultFontAsset')
  i1022.m_defaultFontAssetPath = i1023[11]
  i1022.m_defaultFontSize = i1023[12]
  i1022.m_defaultAutoSizeMinRatio = i1023[13]
  i1022.m_defaultAutoSizeMaxRatio = i1023[14]
  i1022.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1023[15], i1023[16] )
  i1022.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1023[17], i1023[18] )
  i1022.m_autoSizeTextContainer = !!i1023[19]
  i1022.m_IsTextObjectScaleStatic = !!i1023[20]
  var i1025 = i1023[21]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 1, i1024, '')
  }
  i1022.m_fallbackFontAssets = i1024
  i1022.m_matchMaterialPreset = !!i1023[22]
  request.r(i1023[23], i1023[24], 0, i1022, 'm_defaultSpriteAsset')
  i1022.m_defaultSpriteAssetPath = i1023[25]
  i1022.m_enableEmojiSupport = !!i1023[26]
  i1022.m_MissingCharacterSpriteUnicode = i1023[27]
  i1022.m_defaultColorGradientPresetsPath = i1023[28]
  request.r(i1023[29], i1023[30], 0, i1022, 'm_defaultStyleSheet')
  i1022.m_StyleSheetsResourcePath = i1023[31]
  request.r(i1023[32], i1023[33], 0, i1022, 'm_leadingCharacters')
  request.r(i1023[34], i1023[35], 0, i1022, 'm_followingCharacters')
  i1022.m_UseModernHangulLineBreakingRules = !!i1023[36]
  return i1022
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'spriteSheet')
  var i1029 = i1027[2]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_Sprite', i1029[i + 0]));
  }
  i1026.spriteInfoList = i1028
  var i1031 = i1027[3]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 1, i1030, '')
  }
  i1026.fallbackSpriteAssets = i1030
  i1026.hashCode = i1027[4]
  request.r(i1027[5], i1027[6], 0, i1026, 'material')
  i1026.materialHashCode = i1027[7]
  i1026.m_Version = i1027[8]
  i1026.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1027[9], i1026.m_FaceInfo)
  var i1033 = i1027[10]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('TMPro.TMP_SpriteCharacter', i1033[i + 0]));
  }
  i1026.m_SpriteCharacterTable = i1032
  var i1035 = i1027[11]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('TMPro.TMP_SpriteGlyph', i1035[i + 0]));
  }
  i1026.m_SpriteGlyphTable = i1034
  return i1026
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.hashCode = i1039[1]
  i1038.unicode = i1039[2]
  i1038.pivot = new pc.Vec2( i1039[3], i1039[4] )
  request.r(i1039[5], i1039[6], 0, i1038, 'sprite')
  i1038.id = i1039[7]
  i1038.x = i1039[8]
  i1038.y = i1039[9]
  i1038.width = i1039[10]
  i1038.height = i1039[11]
  i1038.xOffset = i1039[12]
  i1038.yOffset = i1039[13]
  i1038.xAdvance = i1039[14]
  i1038.scale = i1039[15]
  return i1038
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1045 = data
  i1044.m_Name = i1045[0]
  i1044.m_HashCode = i1045[1]
  i1044.m_ElementType = i1045[2]
  i1044.m_Unicode = i1045[3]
  i1044.m_GlyphIndex = i1045[4]
  i1044.m_Scale = i1045[5]
  return i1044
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'sprite')
  i1048.m_Index = i1049[2]
  i1048.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1049[3], i1048.m_Metrics)
  i1048.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1049[4], i1048.m_GlyphRect)
  i1048.m_Scale = i1049[5]
  i1048.m_AtlasIndex = i1049[6]
  i1048.m_ClassDefinitionType = i1049[7]
  return i1048
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.TMP_Style', i1053[i + 0]));
  }
  i1050.m_StyleList = i1052
  return i1050
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_Style' )
  var i1057 = data
  i1056.m_Name = i1057[0]
  i1056.m_HashCode = i1057[1]
  i1056.m_OpeningDefinition = i1057[2]
  i1056.m_ClosingDefinition = i1057[3]
  i1056.m_OpeningTagArray = i1057[4]
  i1056.m_ClosingTagArray = i1057[5]
  i1056.m_OpeningTagUnicodeArray = i1057[6]
  i1056.m_ClosingTagUnicodeArray = i1057[7]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1061[i + 0]) );
  }
  i1058.files = i1060
  i1058.componentToPrefabIds = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1065 = data
  i1064.path = i1065[0]
  request.r(i1065[1], i1065[2], 0, i1064, 'unityObject')
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1069[i + 0]) );
  }
  i1066.scriptsExecutionOrder = i1068
  var i1071 = i1067[1]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1071[i + 0]) );
  }
  i1066.sortingLayers = i1070
  var i1073 = i1067[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1073[i + 0]) );
  }
  i1066.cullingLayers = i1072
  i1066.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1067[3], i1066.timeSettings)
  i1066.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1067[4], i1066.physicsSettings)
  i1066.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1067[5], i1066.physics2DSettings)
  i1066.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1067[6], i1066.qualitySettings)
  i1066.enableRealtimeShadows = !!i1067[7]
  i1066.enableAutoInstancing = !!i1067[8]
  i1066.enableStaticBatching = !!i1067[9]
  i1066.enableDynamicBatching = !!i1067[10]
  i1066.lightmapEncodingQuality = i1067[11]
  i1066.desiredColorSpace = i1067[12]
  var i1075 = i1067[13]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1066.allTags = i1074
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.value = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1083 = data
  i1082.id = i1083[0]
  i1082.name = i1083[1]
  i1082.value = i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1087 = data
  i1086.id = i1087[0]
  i1086.name = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1089 = data
  i1088.fixedDeltaTime = i1089[0]
  i1088.maximumDeltaTime = i1089[1]
  i1088.timeScale = i1089[2]
  i1088.maximumParticleTimestep = i1089[3]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1091 = data
  i1090.gravity = new pc.Vec3( i1091[0], i1091[1], i1091[2] )
  i1090.defaultSolverIterations = i1091[3]
  i1090.bounceThreshold = i1091[4]
  i1090.autoSyncTransforms = !!i1091[5]
  i1090.autoSimulation = !!i1091[6]
  var i1093 = i1091[7]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1093[i + 0]) );
  }
  i1090.collisionMatrix = i1092
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1097 = data
  i1096.enabled = !!i1097[0]
  i1096.layerId = i1097[1]
  i1096.otherLayerId = i1097[2]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'material')
  i1098.gravity = new pc.Vec2( i1099[2], i1099[3] )
  i1098.positionIterations = i1099[4]
  i1098.velocityIterations = i1099[5]
  i1098.velocityThreshold = i1099[6]
  i1098.maxLinearCorrection = i1099[7]
  i1098.maxAngularCorrection = i1099[8]
  i1098.maxTranslationSpeed = i1099[9]
  i1098.maxRotationSpeed = i1099[10]
  i1098.baumgarteScale = i1099[11]
  i1098.baumgarteTOIScale = i1099[12]
  i1098.timeToSleep = i1099[13]
  i1098.linearSleepTolerance = i1099[14]
  i1098.angularSleepTolerance = i1099[15]
  i1098.defaultContactOffset = i1099[16]
  i1098.autoSimulation = !!i1099[17]
  i1098.queriesHitTriggers = !!i1099[18]
  i1098.queriesStartInColliders = !!i1099[19]
  i1098.callbacksOnDisable = !!i1099[20]
  i1098.reuseCollisionCallbacks = !!i1099[21]
  i1098.autoSyncTransforms = !!i1099[22]
  var i1101 = i1099[23]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1101[i + 0]) );
  }
  i1098.collisionMatrix = i1100
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1105 = data
  i1104.enabled = !!i1105[0]
  i1104.layerId = i1105[1]
  i1104.otherLayerId = i1105[2]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1107 = data
  var i1109 = i1107[0]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1109[i + 0]) );
  }
  i1106.qualityLevels = i1108
  var i1111 = i1107[1]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1106.names = i1110
  i1106.shadows = i1107[2]
  i1106.anisotropicFiltering = i1107[3]
  i1106.antiAliasing = i1107[4]
  i1106.lodBias = i1107[5]
  i1106.shadowCascades = i1107[6]
  i1106.shadowDistance = i1107[7]
  i1106.shadowmaskMode = i1107[8]
  i1106.shadowProjection = i1107[9]
  i1106.shadowResolution = i1107[10]
  i1106.softParticles = !!i1107[11]
  i1106.softVegetation = !!i1107[12]
  i1106.activeColorSpace = i1107[13]
  i1106.desiredColorSpace = i1107[14]
  i1106.masterTextureLimit = i1107[15]
  i1106.maxQueuedFrames = i1107[16]
  i1106.particleRaycastBudget = i1107[17]
  i1106.pixelLightCount = i1107[18]
  i1106.realtimeReflectionProbes = !!i1107[19]
  i1106.shadowCascade2Split = i1107[20]
  i1106.shadowCascade4Split = new pc.Vec3( i1107[21], i1107[22], i1107[23] )
  i1106.streamingMipmapsActive = !!i1107[24]
  i1106.vSyncCount = i1107[25]
  i1106.asyncUploadBufferSize = i1107[26]
  i1106.asyncUploadTimeSlice = i1107[27]
  i1106.billboardsFaceCameraPosition = !!i1107[28]
  i1106.shadowNearPlaneOffset = i1107[29]
  i1106.streamingMipmapsMemoryBudget = i1107[30]
  i1106.maximumLODLevel = i1107[31]
  i1106.streamingMipmapsAddAllCameras = !!i1107[32]
  i1106.streamingMipmapsMaxLevelReduction = i1107[33]
  i1106.streamingMipmapsRenderersPerFrame = i1107[34]
  i1106.resolutionScalingFixedDPIFactor = i1107[35]
  i1106.streamingMipmapsMaxFileIORequests = i1107[36]
  i1106.currentQualityLevel = i1107[37]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1117 = data
  i1116.weight = i1117[0]
  i1116.vertices = i1117[1]
  i1116.normals = i1117[2]
  i1116.tangents = i1117[3]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1121 = data
  i1120.mode = i1121[0]
  i1120.parameter = i1121[1]
  i1120.threshold = i1121[2]
  return i1120
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1122 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1123 = data
  i1122.xPlacement = i1123[0]
  i1122.yPlacement = i1123[1]
  i1122.xAdvance = i1123[2]
  i1122.yAdvance = i1123[3]
  return i1122
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

Deserializers.buildID = "ccfdd928-fb3f-4334-8196-b4b89aa95cb1";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

