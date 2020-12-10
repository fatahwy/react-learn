import React, { Component, Fragment } from "react";
import { Bar } from 'react-chartjs-2';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <article style={{width: "90vw"}}>
                    <Bar
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May'],
                            datasets: [
                                {
                                    label: 'Rainfall',
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 1,
                                    data: [65, 59, 80, 81, 56]
                                }
                            ]
                        }}
                        height={400}
                        options={{
                            maintainAspectRatio: false,
                            title: {
                                display: true,
                                text: 'Average Rainfall per month',
                                fontSize: 20
                            },
                        }}
                    />
                </article>
            </Fragment>
        );
    }
}


export default Home;
