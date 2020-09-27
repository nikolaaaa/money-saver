import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Row, Col } from 'reactstrap';

// const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//         {
//             label: 'Sales for 2020',
//             data: [4, 5, 3, 1, 5]
//         },
//         {
//             label: 'Sales for 2019 (M)',
//             data: [1.5, 2, 3, 4, 5]
//         }
//     ],
// }

const dataPie = {
    labels: ['Храна', 'Кола', 'Сметки', 'Ипотека', 'Други'],
    datasets: [
        {
            label: 'Sales for 2020',
            data: [250, 130, 80, 670, 50],
            backgroundColor: ['#72d8c8', '#53aed5', '#f46a67', '#ffe15b', '#be5168'],
        },
    ],
}

const optionsPie = {
    title: {
        display: true,
        text: 'Pie Chart'
    },
}

class Dashboard extends React.Component {
    render() {

        return (
            <Row>
                <Col sm="4">
                    <div className="box">
                        <div className="box-body">
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                                <li>Item 4</li>
                                <li>Item 5</li>
                            </ul>
                        </div>
                    </div>
                </Col>

                <Col sm="8">
                    <div className="box">
                        <div className="box-body">
                            <div className="chart">
                                <Pie
                                    data={dataPie}
                                    options={optionsPie}
                                    width={200}
                                />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Dashboard;