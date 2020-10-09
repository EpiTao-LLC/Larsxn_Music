import React from "react"

import { Container, Row } from 'react-bootstrap';
import ChannelsSection from "./ChannelsSection"
import "./ChannelsSection.css"
import channels from "../content_data/channels"
import ErrorBoundary from "./ErrorBoundary"


function createChannels (channel) {

    return (
        <ErrorBoundary>
        <li key = {channel.id}>
        <ChannelsSection

            cName = {channel.name}
            logo = {channel.logo}
            href = {channel.href}
             />
        </li>
        </ErrorBoundary>
    )
}


const ChannelsSectionContainer = () => {
    return (
        <section id="channels">
            <Container fluid >
            <h3 id="cta">You can listen to Larsxn's music on these streaming services.</h3>
                <div className="logo-box ">
                    <Row >
                    {channels.map(createChannels)}
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default ChannelsSectionContainer;