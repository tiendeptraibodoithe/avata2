using UnityEngine;
using Spine;
using Spine.Unity;
using Spine.Unity.AttachmentTools;

public static class SpineUIUtility
{
    /// <summary>
    /// Tự động dò tìm bức ảnh (ảnh trong Region hoặc Mesh) đầu tiên nằm trong Skin được cung cấp
    /// và xuất nó ra thành một Unity Sprite (tự động fix góc lật, tọa độ).
    /// </summary>
    public static Sprite GetFirstSpriteFromSkin(SkeletonData skeletonData, string skinName)
    {
        if (skeletonData == null || string.IsNullOrEmpty(skinName)) return null;

        Skin skin = skeletonData.FindSkin(skinName);
        if (skin == null) return null;

        // Quét toàn bộ linh kiện của Skin này
        foreach (var entry in skin.Attachments)
        {
            var attachment = entry.Attachment;
            AtlasRegion region = null;

            if (attachment is RegionAttachment regionAttachment)
            {
                region = regionAttachment.Region as AtlasRegion;
            }
            else if (attachment is MeshAttachment meshAttachment)
            {
                region = meshAttachment.Region as AtlasRegion;
            }

            // Trả về ngay mảnh ảnh đầu tiên nó nhìn thấy
            if (region != null)
            {
                return region.ToSprite();
            }
        }

        return null;
    }
}
