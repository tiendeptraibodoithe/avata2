using UnityEngine;
using UnityEngine.UI;
using Spine;
using Spine.Unity;
using Spine.Unity.AttachmentTools;

public class SpineToUIImageTest : MonoBehaviour
{
    public SkeletonAnimation skeletonAnimation;
    public Image targetImage;

    [SpineSkin(dataField: "skeletonAnimation")] public string skinName = "Eye/Eye8";
    [SpineSlot(dataField: "skeletonAnimation")] public string slotName = "eye_f";
    [SpineAttachment(slotField: "slotName", skinField: "skinName", dataField: "skeletonAnimation")] public string attachmentName = "Eye8";

    void Start()
    {
        var sprite = GetSprite();
        targetImage.sprite = sprite;
    }

    Sprite GetSprite()
    {
        var skeletonData = skeletonAnimation.Skeleton.Data;
        var skin = skeletonData.FindSkin(skinName);

        if (skin == null)
        {
            Debug.LogError("Không tìm thấy skin: " + skinName);
            return null;
        }

        // ✅ FIX: dùng FindSlot
        var slot = skeletonData.FindSlot(slotName);
        if (slot == null)
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            foreach (var s in skeletonData.Slots)
            {
                sb.Append(s.Name).Append(", ");
            }
            Debug.LogError($"Không tìm thấy slot: '{slotName}'. Các slot hiện có là: {sb.ToString()}");
            return null;
        }

        int slotIndex = slot.Index;

        var attachment = skin.GetAttachment(slotIndex, attachmentName);

        if (attachment == null)
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            foreach (var entry in skin.Attachments)
            {
                if (entry.SlotIndex == slotIndex)
                {
                    sb.Append(entry.Name).Append(", ");
                }
            }
            string validAttachments = sb.ToString();
            if (string.IsNullOrEmpty(validAttachments)) validAttachments = "(TRỐNG - Không có bất kỳ hình ảnh nào được gán ở slot này trong skin hiện tại!)";

            Debug.LogError($"Skin '{skinName}' KHÔNG có attachment nào tên là '{attachmentName}' ở khay (slot) '{slotName}'. Các tuỳ chọn hợp lệ là: {validAttachments}");
            return null;
        }

        AtlasRegion region = null;

        if (attachment is RegionAttachment regionAttachment)
        {
            region = regionAttachment.Region as AtlasRegion;
        }
        else if (attachment is MeshAttachment meshAttachment)
        {
            region = meshAttachment.Region as AtlasRegion;
        }

        if (region != null)
        {
            // Sử dụng hàm ToSprite có sẵn của Spine để tự động xử lý xoay và lật tọa độ Y
            return region.ToSprite();
        }

        Debug.LogError($"Attachment '{attachmentName}' có tồn tại nhưng lại là loại '{attachment.GetType().Name}', không phải RegionAttachment hay MeshAttachment!");
        return null;
    }
}