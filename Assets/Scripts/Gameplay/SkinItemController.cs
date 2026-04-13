using UnityEngine;
using UnityEngine.UI;
using Spine.Unity;

public class SkinItemController : MonoBehaviour
{
    // Loại skin mà button này điều khiển
    public enum SkinType { Eye, Hair, Clothes, Shoe }

    [Header("Loại skin")]
    public SkinType skinType = SkinType.Eye;   // ← chọn đúng loại trong Inspector

    [Header("Data")]
    public SkinOptionData skinData;

    [Header("References")]
    public Image thumbnailImage;
    public GameObject selectionBorder;
    public CharacterSkinMixer skinMixer;
    public SkeletonGraphic skeletonGraphic;

    void Start()
    {
        if (skeletonGraphic == null)
            skeletonGraphic = GetComponentInChildren<SkeletonGraphic>();

        if (skeletonGraphic != null && skinData != null)
        {
            skeletonGraphic.initialSkinName = skinData.primarySkinName;
            skeletonGraphic.Initialize(true);
        }

        if (skinData != null && thumbnailImage != null)
        {
            Sprite autoSprite = null;

            // Tự động moi móc ảnh từ dữ liệu Spine ra nếu có liên kết
            if (skinMixer != null && skinMixer.skeletonAnimation != null && skinMixer.skeletonAnimation.skeletonDataAsset != null)
            {
                var skeletonData = skinMixer.skeletonAnimation.skeletonDataAsset.GetSkeletonData(true);
                autoSprite = SpineUIUtility.GetFirstSpriteFromSkin(skeletonData, skinData.primarySkinName);
            }

            if (autoSprite != null)
            {
                // Thay thế ảnh thumbnail bằng ảnh tự lấy 100% tự động
                thumbnailImage.sprite = autoSprite;
            }
            else if (skinData.thumbnail != null)
            {
                // Fallback (dự phòng): dùng hình vạch sẵn bằng tay
                thumbnailImage.sprite = skinData.thumbnail;
            }
        }

        if (selectionBorder != null)
            selectionBorder.SetActive(false);

        GetComponent<Button>().onClick.AddListener(OnClick);
    }

    public void OnClick()
    {
        if (skinData == null || skinMixer == null) return;

        // Gọi đúng method tùy theo loại skin
        switch (skinType)
        {
            case SkinType.Eye:
                skinMixer.SetEye(skinData.primarySkinName, skinData.secondarySkinName);
                break;

            case SkinType.Hair:
                skinMixer.SetHair(skinData.primarySkinName, skinData.secondarySkinName);
                break;

            case SkinType.Clothes:
                skinMixer.SetOutfit(skinData.primarySkinName);
                break;

            case SkinType.Shoe:
                skinMixer.SetShoe(skinData.primarySkinName);
                break;
        }

        SkinScrollerManager.Instance?.OnItemSelected(this);
    }

    public void SetSelected(bool selected)
    {
        if (selectionBorder != null)
            selectionBorder.SetActive(selected);
    }
}
