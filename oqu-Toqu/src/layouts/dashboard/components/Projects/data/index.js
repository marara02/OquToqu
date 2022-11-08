/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
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

    const Company = ({image, name}) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDAvatar src={image} name={name} size="sm"/>
            <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
                {name}
            </MDTypography>
        </MDBox>
    );

    return {
        columns: [
            {Header: "Курс аты", accessor: "topics", width: "45%", align: "left"},
            {Header: "Оқыту центрі", accessor: "center", width: "35%", align: "left"},
            {Header: "Мұғалімдер", accessor: "teachers", width: "10%", align: "left"},
            {Header: "Оқушылар саны", accessor: "number", align: "center"},
        ],

        rows: [
            {
                topics: <Company image={logoXD} name="UI/UX дизайн"/>,
                center: (
                    <MDTypography variant="caption" color="text" fontWeight="medium">
                        Zerdeli.kz
                    </MDTypography>
                ),
                teachers: (
                    <MDBox display="flex" py={1}>
                        {avatars([
                            [team1, "Ғалия Егемберді"],
                            [team2, "Үміт Кұмарова"],
                            [team3, "Еркебұлан Ғазиз"],
                            [team4, "Мақсат Сабитбек"],
                        ])}
                    </MDBox>
                ),
                number: (
                    <MDBox width="8rem" textAlign="left">
                        <MDProgress value={60} color="info" variant="gradient" label={false}/>
                    </MDBox>
                ),
            },
            {
                topics: <Company image={logoAtlassian} name="Геометрия 7 сынып"/>,
                center: (
                    <MDTypography variant="caption" color="text" fontWeight="medium">
                        Zerdeli.kz
                    </MDTypography>
                ),
                teachers: (
                    <MDBox display="flex" py={1}>
                        {avatars([
                            [team2, "Үміт Кұмарова"],
                            [team4, "Мақсат Сабитбек"],
                        ])}
                    </MDBox>
                ),
                number: (
                    <MDBox width="8rem" textAlign="left">
                        <MDProgress value={10} color="info" variant="gradient" label={false}/>
                    </MDBox>
                ),
            },
            {
                topics: <Company image={logoSlack} name="АBC English 1 grade"/>,
                center: (
                    <MDTypography variant="caption" color="text" fontWeight="medium">
                        Zerdeli.kz
                    </MDTypography>
                ),
                teachers: (
                    <MDBox display="flex" py={1}>
                        {avatars([
                            [team1, "Маржан Нұралы"],
                            [team3, "Сэм Смит"],
                        ])}
                    </MDBox>
                ),
                number: (
                    <MDBox width="8rem" textAlign="left">
                        <MDProgress value={100} color="success" variant="gradient" label={false}/>
                    </MDBox>
                ),
            },
            {
                topics: <Company image={logoSpotify} name="Алгебра 9 сынып"/>,
                center: (
                    <MDTypography variant="caption" color="text" fontWeight="medium">
                        Zerdeli.kz
                    </MDTypography>
                ),
                teachers: (
                    <MDBox display="flex" py={1}>
                        {avatars([
                            [team4, "Маржан Нұралы"],
                            [team3, "Жанель Кайырбекова"],
                            [team2, "Марлен Нұралы"],
                            [team1, "Айлин Нұралы"],
                        ])}
                    </MDBox>
                ),
                number: (
                    <MDBox width="8rem" textAlign="left">
                        <MDProgress value={100} color="success" variant="gradient" label={false}/>
                    </MDBox>
                ),
            },
            {
                topics: <Company image={logoJira} name="Қазақ тілі 9 сынып"/>,
                center: (
                    <MDTypography variant="caption" color="text" fontWeight="medium">
                        $500
                    </MDTypography>
                ),
                teachers: (
                    <MDBox display="flex" py={1}>
                        {avatars([[team4, "Маржан Нұралы"]])}
                    </MDBox>
                ),
                number: (
                    <MDBox width="8rem" textAlign="left">
                        <MDProgress value={25} color="info" variant="gradient" label={false}/>
                    </MDBox>
                ),
            }
        ],
    };
}
