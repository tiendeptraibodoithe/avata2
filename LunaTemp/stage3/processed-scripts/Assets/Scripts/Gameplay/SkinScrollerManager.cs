using UnityEngine;

public class SkinScrollerManager : MonoBehaviour
{
    public static SkinScrollerManager Instance;

    private SkinItemController _currentSelected;

    void Awake()
    {
        Instance = this;
    }

    public void OnItemSelected(SkinItemController selected)
    {
        // Bỏ highlight item cũ
        if (_currentSelected != null)
            _currentSelected.SetSelected(false);

        // Highlight item mới
        selected.SetSelected(true);
        _currentSelected = selected;
    }
}

