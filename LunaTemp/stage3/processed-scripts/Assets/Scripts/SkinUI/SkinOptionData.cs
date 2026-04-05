using UnityEngine;

[CreateAssetMenu(fileName = "SkinOption", menuName = "Avatar/Skin Option")]
public class SkinOptionData : ScriptableObject
{
    [Header("Hiển thị")]
    public Sprite thumbnail;            // Ảnh nhỏ preview

    [Header("Spine Skin")]
    public string primarySkinName;      // Skin chính (Eye, Hair_Back, Outfit, Shoe)
    public string secondarySkinName;    // Chỉ dùng cho Tóc (Hair_Front), còn lại để trống
}

