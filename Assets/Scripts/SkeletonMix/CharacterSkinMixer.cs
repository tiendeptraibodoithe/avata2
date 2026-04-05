using UnityEngine;
using Spine;
using Spine.Unity;

public class CharacterSkinMixer : MonoBehaviour
{
    public SkeletonAnimation skeletonAnimation;

    // === Skin cố định (không thay đổi) ===
    [SpineSkin] public string bodySkinName;
    [SpineSkin] public string mouthSkinName = "Mouth/Mouth1";
    [SpineSkin] public string eyeBrowName = "Eyebrow/Eyebrow1";

    // === Skin người chơi chọn (UI sẽ thay đổi) ===
    [SpineSkin] public string currentEyeSkin = "Eye/Eye8";
    [SpineSkin] public string currentEyelidSkin;
    [SpineSkin] public string currentHairBackSkin = "Hair_Back/Hair1_Back_Color_1";
    [SpineSkin] public string currentHairFrontSkin = "Hair_Front/Hair1_Front_Color_1";
    [SpineSkin] public string currentOutfitSkin = "";
    [SpineSkin] public string currentShoeSkin = "";

    void Start()
    {
        if (skeletonAnimation == null)
            skeletonAnimation = GetComponent<SkeletonAnimation>();
        ApplyCombinedSkin();
    }

    // === Các method công khai để UI gọi ===

    public void SetEye(string skinName, string eyelidName)
    {
        currentEyeSkin = skinName;
        currentEyelidSkin = eyelidName;
        ApplyCombinedSkin();
    }

    public void SetHair(string backSkin, string frontSkin)
    {
        currentHairBackSkin = backSkin;
        currentHairFrontSkin = frontSkin;
        ApplyCombinedSkin();
    }

    public void SetOutfit(string skinName)
    {
        currentOutfitSkin = skinName;
        ApplyCombinedSkin();
    }

    public void SetShoe(string skinName)
    {
        currentShoeSkin = skinName;
        ApplyCombinedSkin();
    }

    // === Tổng hợp và áp dụng skin ===
    public void ApplyCombinedSkin()
    {
        var skeleton = skeletonAnimation.Skeleton;
        var skeletonData = skeleton.Data;

        Skin combined = new Skin("CombinedSkin");

        TryAddSkin(combined, skeletonData, bodySkinName);
        TryAddSkin(combined, skeletonData, eyeBrowName);
        TryAddSkin(combined, skeletonData, mouthSkinName);
        TryAddSkin(combined, skeletonData, currentHairBackSkin);
        TryAddSkin(combined, skeletonData, currentHairFrontSkin);
        TryAddSkin(combined, skeletonData, currentEyeSkin);
        TryAddSkin(combined, skeletonData, currentEyelidSkin);
        TryAddSkin(combined, skeletonData, currentOutfitSkin);
        TryAddSkin(combined, skeletonData, currentShoeSkin);

        skeleton.SetSkin(combined);
        skeleton.SetToSetupPose();
        skeletonAnimation.Update(0);
    }

    private void TryAddSkin(Skin combined, SkeletonData data, string skinName)
    {
        if (string.IsNullOrEmpty(skinName)) return;
        Skin s = data.FindSkin(skinName);
        if (s == null)
        {
            Debug.LogWarning($"[SkinMixer] Không tìm thấy skin: '{skinName}'");
            return;
        }
        combined.AddSkin(s);
    }
}
