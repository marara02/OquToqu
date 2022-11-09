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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import * as tpl from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format"


let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

function Billing() {
    const events = [
        {
            id: 0,
            name: "Holiday",
            description: "this is description",
            allDay: true,
            start: new Date(2015, 3, 0),
            end: new Date(2015, 3, 1)
        }
    ];
    const event = ({event}) => {
        return (
            <div>
                {event.name} <br/> <small>{event.description}</small>{" "}
            </div>
        );
    };

    return (
        <div className="" style={{minHeight: 580}}>
            <BigCalendar
                events={events}
                views={allViews}
                step={60}
                showMultiDayTimes
                defaultDate={new Date(2015, 3, 1)}
                style={{minHeight: 580}}
                components={{
                    event: event
                }}
            />
        </div>
    );

}

export default Billing;
