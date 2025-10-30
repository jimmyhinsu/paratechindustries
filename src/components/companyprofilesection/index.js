import React from "react";
import styles from "./companyprofilesection.module.scss";

export default function Companyprofilesection() {
  return (
    <>
      <section className={styles.companyProfile}>
        <div className={styles.container}>
          <div className={styles.profileIntro}>
            <div className={styles.profileContent}>
              <h2>Company Profile</h2>
              <p>
                Formed as a Sole Proprietorship in 2010, we Paratech Industries
                today have established ourselves as a high-level manufacturer,
                supplier, and exporter for extensive ranges such as Jewellery
                Laser Soldering Machine, Laser Spot Soldering Machine, Jewellery
                Laser Soldering Machine, Desktop Jewellery Laser Soldering
                Welding Machine, and Param Laser Soldering Machine Jewelry Laser
                Welding Machine .
                <br />
                <br />
                With our developed and functional setup in Surat, Gujarat,
                India, we have witnessed remarkable growth and expansion across
                the country. Under the leadership of our owner,
                <strong> Mr. Gaurav Desai</strong>, we have developed a
                significant client base by ensuring quality, timely delivery,
                and innovation.
              </p>
            </div>

            <div className={styles.profileImage}>
              <img src="/company-building.jpg" alt="Paratech Industries" />
            </div>
          </div>

          <div className={styles.tableWrapper}>
            <h2>
              Key Facts of Paratech Industries
            </h2>
            <table className={styles.infoTable}>
              <tbody>
                <tr>
                  <td>Nature of Business</td>
                  <td>Manufacturer, Supplier, Exporter</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Surat, Gujarat, India</td>
                </tr>
                <tr>
                  <td>Year of Establishment</td>
                  <td>2010</td>
                </tr>
                <tr>
                  <td>Number of Employees</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>GST Number</td>
                  <td>24BRAPD4073J1Z2</td>
                </tr>
                <tr>
                  <td>Modes of Transport</td>
                  <td>By Rail, Road, Air</td>
                </tr>
                <tr>
                  <td>Modes of Payments</td>
                  <td>
                    Online Payments (NEFT/RTGS/IMPS), Cheque/DD, Wallet and UPI
                  </td>
                </tr>
                <tr>
                  <td>IE Code</td>
                  <td>5296128138</td>
                </tr>
                <tr>
                  <td>Export Percentage</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>Banker</td>
                  <td>Kotak Mahindra Bank</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
