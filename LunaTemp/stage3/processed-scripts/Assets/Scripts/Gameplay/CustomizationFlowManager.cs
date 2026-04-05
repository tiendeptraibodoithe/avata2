using UnityEngine;
using UnityEngine.UI;
using Spine.Unity;

public class CustomizationFlowManager : MonoBehaviour
{
    // =============================================
    // PORTRAIT CANVAS
    // =============================================
    [Header("--- PORTRAIT CANVAS ---")]
    public GameObject portraitCanvas;

    [Header("Portrait - Scrollers")]
    public GameObject p_eyeScroller;
    public GameObject p_hairScroller;
    public GameObject p_clothesScroller;
    public GameObject p_shoeScroller;

    [Header("Portrait - Buttons")]
    public GameObject p_btnNext;
    public GameObject p_btnDone;

    [Header("Portrait - End Game Panel")]
    public GameObject p_endGamePanel;

    // =============================================
    // LANDSCAPE CANVAS
    // =============================================
    [Header("--- LANDSCAPE CANVAS ---")]
    public GameObject landscapeCanvas;

    [Header("Landscape - Scrollers")]
    public GameObject l_eyeScroller;
    public GameObject l_hairScroller;
    public GameObject l_clothesScroller;
    public GameObject l_shoeScroller;

    [Header("Landscape - Buttons")]
    public GameObject l_btnNext;
    public GameObject l_btnDone;

    [Header("Landscape - End Game Panel")]
    public GameObject l_endGamePanel;

    // =============================================
    // SHARED
    // =============================================
    [Header("--- SHARED ---")]
    public SkeletonAnimation characterSpine;
    public string danceAnimationName = "dance2";

    // -----------------------------------------------
    private int _currentStep = 0;
    private bool _isPortrait;

    void Start()
    {
        // Ẩn endgame ngay từ đầu
        if (p_endGamePanel != null) p_endGamePanel.SetActive(false);
        if (l_endGamePanel != null) l_endGamePanel.SetActive(false);

        UpdateCanvasOrientation();
        GoToStep(0);
    }

    void Update()
    {
        // Kiểm tra mỗi frame xem orientation có đổi không
        bool portrait = IsPortrait();
        if (portrait != _isPortrait)
        {
            _isPortrait = portrait;
            UpdateCanvasOrientation();
            GoToStep(_currentStep); // Cập nhật lại UI cho canvas mới
        }
    }

    // --------------------------------------------------
    // Xác định chiều màn hình
    // --------------------------------------------------
    bool IsPortrait()
    {
        return Screen.height >= Screen.width;
    }

    void UpdateCanvasOrientation()
    {
        _isPortrait = IsPortrait();
        if (portraitCanvas != null)   portraitCanvas.SetActive(_isPortrait);
        if (landscapeCanvas != null)  landscapeCanvas.SetActive(!_isPortrait);
    }

    // --------------------------------------------------
    // Gọi từ Button NEXT (cả Landscape lẫn Portrait)
    // --------------------------------------------------
    public void OnNextClicked()
    {
        _currentStep++;
        if (_currentStep <= 3)
            GoToStep(_currentStep);
    }

    // --------------------------------------------------
    // Gọi từ Button DONE (cả hai canvas)
    // --------------------------------------------------
    public void OnDoneClicked()
    {
        // Ẩn hết scrollers & buttons
        SetScrollersActive(false);
        SetButtonsActive(false, false);

        // Hiện EndGame Panel theo canvas đang active
        if (_isPortrait)
        {
            if (p_endGamePanel != null) p_endGamePanel.SetActive(true);
        }
        else
        {
            if (l_endGamePanel != null) l_endGamePanel.SetActive(true);
        }

        // Chuyển animation nhân vật sang dance
        if (characterSpine != null)
        {
            characterSpine.AnimationState.SetAnimation(0, danceAnimationName, true);
        }
    }

    // --------------------------------------------------
    // Điều hướng các bước
    // --------------------------------------------------
    void GoToStep(int step)
    {
        // Ẩn hết trước
        SetScrollersActive(false);

        // Hiện scroller tương ứng với canvas đang active
        if (_isPortrait)
        {
            switch (step)
            {
                case 0: if (p_eyeScroller     != null) p_eyeScroller.SetActive(true);     break;
                case 1: if (p_hairScroller    != null) p_hairScroller.SetActive(true);    break;
                case 2: if (p_clothesScroller != null) p_clothesScroller.SetActive(true); break;
                case 3: if (p_shoeScroller    != null) p_shoeScroller.SetActive(true);    break;
            }
        }
        else
        {
            switch (step)
            {
                case 0: if (l_eyeScroller     != null) l_eyeScroller.SetActive(true);     break;
                case 1: if (l_hairScroller    != null) l_hairScroller.SetActive(true);    break;
                case 2: if (l_clothesScroller != null) l_clothesScroller.SetActive(true); break;
                case 3: if (l_shoeScroller    != null) l_shoeScroller.SetActive(true);    break;
            }
        }

        bool isLastStep = (step == 3);
        SetButtonsActive(!isLastStep, isLastStep);
    }

    // --------------------------------------------------
    // Helpers: ẩn/hiện scrollers & buttons cả 2 canvas
    // --------------------------------------------------
    void SetScrollersActive(bool active)
    {
        // Portrait
        if (p_eyeScroller != null)     p_eyeScroller.SetActive(active);
        if (p_hairScroller != null)    p_hairScroller.SetActive(active);
        if (p_clothesScroller != null) p_clothesScroller.SetActive(active);
        if (p_shoeScroller != null)    p_shoeScroller.SetActive(active);
        // Landscape
        if (l_eyeScroller != null)     l_eyeScroller.SetActive(active);
        if (l_hairScroller != null)    l_hairScroller.SetActive(active);
        if (l_clothesScroller != null) l_clothesScroller.SetActive(active);
        if (l_shoeScroller != null)    l_shoeScroller.SetActive(active);
    }

    void SetButtonsActive(bool showNext, bool showDone)
    {
        if (p_btnNext != null) p_btnNext.SetActive(showNext);
        if (p_btnDone != null) p_btnDone.SetActive(showDone);
        if (l_btnNext != null) l_btnNext.SetActive(showNext);
        if (l_btnDone != null) l_btnDone.SetActive(showDone);
    }
}

