import React,{Component} from "react";
import PropTypes from "prop-types";
import { Container, Row, Col ,Card,CardBody} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";

class BlogOverview extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email : '',
        password : '',
        isLogin : false,
        login : false
    }
}

async componentDidMount(){
  const iniLogin = await window.localStorage.getItem('isLogin')
  const token = await window.localStorage.getItem('token')

  console.log('iniLogin', iniLogin)
  console.log('iniLogin', token)
  
  if(iniLogin !== "true") {
    console.log(iniLogin)
    console.log(typeof iniLogin)
    window.location.href = "/login"
  }
}
  render(){
    return(
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Dashboard Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>
    <Row>
      <Col>
          <Card  className="mb-4">
                <CardBody style={{borderRadius: 6}}>
                  <h6 className="mb-0" style={{fontWeight: '600'}}>Jumlah Siswa</h6>
                  <p style={{fontWeight:300}}>369 Siswa</p>
                </CardBody>
          </Card>
      </Col>
      <Col>
          <Card  className="mb-4">
                <CardBody style={{borderRadius: 6}}>
                  <h6 className="mb-0" style={{fontWeight: '600'}}>Jumlah Kelas</h6>
                  <p style={{fontWeight:300}}>369 Siswa</p>
                </CardBody>
          </Card>
      </Col>
      <Col>
          <Card  className="mb-4">
                <CardBody style={{borderRadius: 6}}>
                  <h6 className="mb-0" style={{fontWeight: '600'}}>Jumlah Pelanggaran</h6>
                  <p style={{fontWeight:300}}>369 Siswa</p>
                </CardBody>
          </Card>
      </Col>
    </Row>

    {/* Small Stats Blocks */}
    {/* <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))}
    </Row> */}

    <Row>
      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col>

      {/* Discussions */}
      <Col lg="" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col>

    </Row>
  </Container>
    )
  }
}

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

// BlogOverview.defaultProps = {
//   smallStats: [
//     {
//       label: "Posts",
//       value: "2,390",
//       percentage: "4.7%",
//       increase: true,
//       chartLabels: [null, null, null, null, null, null, null],
//       attrs: { md: "6", sm: "6" },
//       datasets: [
//         {
//           label: "Today",
//           fill: "start",
//           borderWidth: 1.5,
//           backgroundColor: "rgba(0, 184, 216, 0.1)",
//           borderColor: "rgb(0, 184, 216)",
//           data: [1, 2, 1, 3, 5, 4, 7]
//         }
//       ]
//     },
//     {
//       label: "Pages",
//       value: "182",
//       percentage: "12.4",
//       increase: true,
//       chartLabels: [null, null, null, null, null, null, null],
//       attrs: { md: "6", sm: "6" },
//       datasets: [
//         {
//           label: "Today",
//           fill: "start",
//           borderWidth: 1.5,
//           backgroundColor: "rgba(23,198,113,0.1)",
//           borderColor: "rgb(23,198,113)",
//           data: [1, 2, 3, 3, 3, 4, 4]
//         }
//       ]
//     },
//     {
//       label: "Comments",
//       value: "8,147",
//       percentage: "3.8%",
//       increase: false,
//       decrease: true,
//       chartLabels: [null, null, null, null, null, null, null],
//       attrs: { md: "4", sm: "6" },
//       datasets: [
//         {
//           label: "Today",
//           fill: "start",
//           borderWidth: 1.5,
//           backgroundColor: "rgba(255,180,0,0.1)",
//           borderColor: "rgb(255,180,0)",
//           data: [2, 3, 3, 3, 4, 3, 3]
//         }
//       ]
//     },
//     {
//       label: "New Customers",
//       value: "29",
//       percentage: "2.71%",
//       increase: false,
//       decrease: true,
//       chartLabels: [null, null, null, null, null, null, null],
//       attrs: { md: "4", sm: "6" },
//       datasets: [
//         {
//           label: "Today",
//           fill: "start",
//           borderWidth: 1.5,
//           backgroundColor: "rgba(255,65,105,0.1)",
//           borderColor: "rgb(255,65,105)",
//           data: [1, 7, 1, 3, 1, 4, 8]
//         }
//       ]
//     },
//     {
//       label: "Subscribers",
//       value: "17,281",
//       percentage: "2.4%",
//       increase: false,
//       decrease: true,
//       chartLabels: [null, null, null, null, null, null, null],
//       attrs: { md: "4", sm: "6" },
//       datasets: [
//         {
//           label: "Today",
//           fill: "start",
//           borderWidth: 1.5,
//           backgroundColor: "rgb(0,123,255,0.1)",
//           borderColor: "rgb(0,123,255)",
//           data: [3, 2, 3, 2, 4, 5, 4]
//         }
//       ]
//     }
//   ]
// };

export default BlogOverview;
