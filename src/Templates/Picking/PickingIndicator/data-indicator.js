import "../Picking.css";

export const dataIndicator = (packed, request) => {

    let div;
    let styles;
    let veryLikePink;
    let primaryColor

    div = document.createElement('div');
    document.body.appendChild(div);
    styles = window.getComputedStyle(div);
    veryLikePink = styles.getPropertyValue('--very-like-pink');

    div = document.createElement('div');
    document.body.appendChild(div);
    styles = window.getComputedStyle(div);
    primaryColor = styles.getPropertyValue('--primary-color');

    return {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [packed, parseInt(request, 10) - parseInt(packed, 10)],
                backgroundColor: [
                    veryLikePink,
                    primaryColor,
                ],
                borderColor: [
                    veryLikePink,
                    primaryColor,
                ],
                borderWidth: 1,
            },
        ],
    };
}

