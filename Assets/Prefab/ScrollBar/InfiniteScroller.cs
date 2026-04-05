using UnityEngine;
using UnityEngine.EventSystems;

public class InfiniteScroller : MonoBehaviour, IDragHandler, IEndDragHandler
{
    [Header("UI References")]
    public RectTransform[] items; // Kéo thả 12 items của bạn vào đây

    [Header("Settings")]
    public float itemSpacing = 200f; // Khoảng cách giữa các item (bao gồm cả độ cao item)
    public float decelerationRate = 0.95f; // Độ trượt (quán tính) sau khi thả tay
    public float dragSensitivity = 1f;

    private float velocity;
    private bool isDragging;
    private float totalHeight;
    private float upperBoundary;
    private float lowerBoundary;

    void Start()
    {
        totalHeight = items.Length * itemSpacing;
        upperBoundary = (items.Length / 2f) * itemSpacing;
        lowerBoundary = -upperBoundary;

        // Tự động sắp xếp vị trí ban đầu cho dọc các item
        for (int i = 0; i < items.Length; i++)
        {
            // Sắp xếp các item từ trên xuống dưới sao cho có tâm ở giữa
            float posY = upperBoundary - (i * itemSpacing) - (itemSpacing / 2f);
            items[i].anchoredPosition = new Vector2(items[i].anchoredPosition.x, posY);
        }
    }

    // Giao diện bắt sự kiện khi người dùng đang vuốt tĩnh
    public void OnDrag(PointerEventData eventData)
    {
        isDragging = true;
        // Lấy khoảng cách di chuyển chuột/cảm ứng theo trục Y
        float deltaY = eventData.delta.y * dragSensitivity;
        MoveItems(deltaY);
        velocity = deltaY; // Ghi nhớ vận tốc vuốt
    }

    // Bắt sự kiện khi người dùng thả tay ra
    public void OnEndDrag(PointerEventData eventData)
    {
        isDragging = false;
    }

    void Update()
    {
        // Trượt theo quán tính khi thả tay
        if (!isDragging && Mathf.Abs(velocity) > 0.01f)
        {
            MoveItems(velocity);
            velocity *= decelerationRate; // Giảm dần vận tốc
        }
    }

    // Hàm di chuyển tất cả UI chung
    void MoveItems(float amount)
    {
        foreach (var item in items)
        {
            // Di chuyển
            item.anchoredPosition += new Vector2(0, amount);

            // Xử lý vòng lặp vô tận (Loop)
            if (item.anchoredPosition.y > upperBoundary)
            {
                // Nếu vượt quá mép trên -> Dời nó xuống dưới cùng
                item.anchoredPosition -= new Vector2(0, totalHeight);
            }
            else if (item.anchoredPosition.y < lowerBoundary)
            {
                // Nếu lọt quá mép dưới -> Dời nó lên vị trí trên cùng
                item.anchoredPosition += new Vector2(0, totalHeight);
            }
        }
    }
}

