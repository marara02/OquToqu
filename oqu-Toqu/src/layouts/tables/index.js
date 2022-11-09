/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import homeDecor3 from "../../assets/images/home-decor-3.jpg";
import homeDecor4 from "../../assets/images/home-decor-4.jpeg";
import lesson1 from "../../assets/images/girl-1.jpg";
import lesson3 from "../../assets/images/rocket.jpg";
import lesson2 from "../../assets/images/lesson.jpg";
import lesson5 from "../../assets/images/lesson-5.jpg";
import lesson8 from "../../assets/images/lesson-8.jpg";
import lesson6 from "../../assets/images/lesson-6.jpg";
import lesson7 from "../../assets/images/lesson-7.jpg";

function Tables() {
    const {columns, rows} = authorsTableData();
    const {columns: pColumns, rows: pRows} = projectsTableData();

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            {/*<MDBox pt={6} pb={3}>*/}
            {/*  <Grid container spacing={6}>*/}
            {/*    <Grid item xs={12}>*/}
            {/*      <Card>*/}
            {/*        <MDBox*/}
            {/*          mx={2}*/}
            {/*          mt={-3}*/}
            {/*          py={3}*/}
            {/*          px={2}*/}
            {/*          variant="gradient"*/}
            {/*          bgColor="info"*/}
            {/*          borderRadius="lg"*/}
            {/*          coloredShadow="info"*/}
            {/*        >*/}
            {/*          <MDTypography variant="h6" color="white">*/}
            {/*            Authors Table*/}
            {/*          </MDTypography>*/}
            {/*        </MDBox>*/}
            {/*        <MDBox pt={3}>*/}
            {/*          <DataTable*/}
            {/*            table={{ columns, rows }}*/}
            {/*            isSorted={false}*/}
            {/*            entriesPerPage={false}*/}
            {/*            showTotalEntries={false}*/}
            {/*            noEndBorder*/}
            {/*          />*/}
            {/*        </MDBox>*/}
            {/*      </Card>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12}>*/}
            {/*      <Card>*/}
            {/*        <MDBox*/}
            {/*          mx={2}*/}
            {/*          mt={-3}*/}
            {/*          py={3}*/}
            {/*          px={2}*/}
            {/*          variant="gradient"*/}
            {/*          bgColor="info"*/}
            {/*          borderRadius="lg"*/}
            {/*          coloredShadow="info"*/}
            {/*        >*/}
            {/*          <MDTypography variant="h6" color="white">*/}
            {/*            Projects Table*/}
            {/*          </MDTypography>*/}
            {/*        </MDBox>*/}
            {/*        <MDBox pt={3}>*/}
            {/*          <DataTable*/}
            {/*            table={{ columns: pColumns, rows: pRows }}*/}
            {/*            isSorted={false}*/}
            {/*            entriesPerPage={false}*/}
            {/*            showTotalEntries={false}*/}
            {/*            noEndBorder*/}
            {/*          />*/}
            {/*        </MDBox>*/}
            {/*      </Card>*/}
            {/*    </Grid>*/}
            {/*  </Grid>*/}
            {/*</MDBox>*/}
            <MDBox p={2}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6} xl={3}>
                        <DefaultProjectCard
                            image={lesson1}
                            label="11 сынып"
                            title="IELTS дайындық"
                            description="IELTS толық дайындалу системасы."
                            action={{
                                type: "internal",
                                route: "/pages/profile/profile-overview",
                                color: "info",
                                label: "Көбірек",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <DefaultProjectCard
                            image={lesson2}
                            label="9 сынып"
                            title="Геометрия"
                            description="Мектеп бағдарламасына қосымша"
                            action={{
                                type: "internal",
                                route: "/pages/profile/profile-overview",
                                color: "info",
                                label: "Көбірек",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <DefaultProjectCard
                            image={lesson3}
                            label="7 сынып"
                            title="Физика"
                            description="Физика және астрономия"
                            action={{
                                type: "internal",
                                route: "/pages/profile/profile-overview",
                                color: "info",
                                label: "Көбірек",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <DefaultProjectCard
                            image={lesson7}
                            label="7 сынып"
                            title="Ағылшын тілі"
                            description="Intermediate English Language"
                            action={{
                                route: "/pages/profile/profile-overview",
                                color: "info",
                                label: "Көбірек",
                                type: "internal"
                            }}
                        />
                    </Grid>
                </Grid>
            </MDBox>
            <MDBox p={2}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6} xl={3}>
                        <DefaultProjectCard
                            image={lesson1}
                            label="11 сынып"
                            title="IELTS дайындық"
                            description="IELTS толық дайындалу системасы."
                            action={{
                                type: "internal",
                                route: "/pages/profile/profile-overview",
                                color: "info",
                                label: "Көбірек",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <DefaultProjectCard
                            image={lesson5}
                            label="11 сынып"
                            title="Қазақ тілі"
                            description="ҰБТ оқу сауаттылығына дайындық"
                            action={{
                                type: "internal",
                                route: "/pages/profile/profile-overview",
                                color: "info",
                                label: "Көбірек",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <DefaultProjectCard
                            image={lesson6}
                            label="5 сынып"
                            title="Орыс тілі"
                            description="Орыс тілі грамматикасы және ауыз әдебиеті"
                            action={{
                                type: "internal",
                                route: "/pages/profile/profile-overview",
                                color: "info",
                                label: "Көбірек",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <DefaultProjectCard
                            image={lesson8}
                            label="4 сынып"
                            title="Қазақ тілі"
                            description="Шығарма жазуға дайындық"
                            action={{
                                route: "/pages/profile/profile-overview",
                                color: "info",
                                label: "Көбірек",
                                type: "external"
                            }}
                        />
                    </Grid>
                </Grid>
            </MDBox>
        </DashboardLayout>
    );
}

export default Tables;
