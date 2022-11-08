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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import Tooltip from "@mui/material/Tooltip";
import MDAvatar from "../../../../components/MDAvatar";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import logoXD from "../../../../assets/images/small-logos/logo-xd.svg";

const avatars = (members) =>
    members.map(([image, name]) => (
        <Tooltip key={name} title={name} placeholder="bottom">
            <MDAvatar
                src={image}
                alt="name"
                size="xs"
                sx={{
                    border: ({borders: {borderWidth}, palette: {white}}) =>
                        `${borderWidth[2]} solid ${white.main}`,
                    cursor: "pointer",
                    position: "relative",

                    "&:not(:first-of-type)": {
                        ml: -1.25,
                    },

                    "&:hover, &:focus": {
                        zIndex: "10",
                    },
                }}
            />
        </Tooltip>
    ));

function OrdersOverview() {
    return (
        <Card sx={{height: "100%"}}>
            <MDBox pt={3} px={3}>
                <MDTypography variant="h6" fontWeight="medium">
                    Көшбасшы оқушылар
                </MDTypography>
            </MDBox>
            <MDBox p={1}>
                <TimelineItem
                    image={team1}
                    color="primary"
                    title="Ғалия Егемберді"
                    dateTime="11 сынып"
                />
                <TimelineItem
                    color="info"
                    title="Арсен Турганбаев"
                    dateTime="11 сынып"
                />
                <TimelineItem
                    color="primary"
                    title="Мадияр Құрылысбек"
                    dateTime="9 сынып"
                />
                <TimelineItem
                    color="info"
                    title="Айзат Арипкулова"
                    dateTime="10 сынып"
                />
                <TimelineItem
                    color="primary"
                    title="Арман Кенжебеков"
                    dateTime="11 сынып"
                    lastItem
                />
            </MDBox>
        </Card>
    );
}

export default OrdersOverview;
