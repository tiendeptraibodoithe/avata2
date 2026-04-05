using UnityEngine;
using UnityEngine.UI;

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

    void Start()
    {
        if (skinData != null && thumbnailImage != null)
            thumbnailImage.sprite = skinData.thumbnail;

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
