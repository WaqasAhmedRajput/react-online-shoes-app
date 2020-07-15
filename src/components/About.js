import React from 'react'
import styles from './About.module.css';

function About() {

    return (
        <div className={styles.container}>
            <center>
                <table className={styles.tables}>
                    <tr>
                        <th>Developer Name:</th>
                        <td>Waqas Ahmed Rajput</td>
                    </tr>
                    <tr>
                        <th>Project Name:</th>
                        <td>Shoe Shopping Demo App 3rd</td>
                    </tr>
                    <tr>
                        <th>Project Assignment :</th>
                        <td>Bootcamp 2020</td>
                    </tr>
                    <tr>
                        <th>Email Address:</th>
                        <td>waqasrajput35@yahoo.com</td>
                    </tr>
                    <th>Address :</th>
                    <td>Hyderabad Sindh Pakistan</td>
                </table>
            </center>
        </div>
    )

}

export default About;
