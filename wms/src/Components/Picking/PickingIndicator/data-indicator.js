
export const dataIndicator = (packed, request) => {
    return {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [packed, parseInt(request, 10) - parseInt(packed, 10)],
                backgroundColor: [
                    '#5856e9',
                    '#fcdae1',
                ],
                borderColor: [
                    '#5856e9',
                    '#fcdae1',
                ],
                borderWidth: 1,
            },
        ],
    };
}

