import React from "react"

import { Container, Row } from 'react-bootstrap';
import ChannelsSection from "./ChannelsSection"
import "./ChannelsSection.css"
import channels from "../content_data/channels"
import ErrorBoundary from "./ErrorBoundary"


function createChannels (channel) {

    return (
        <ErrorBoundary>
        <ChannelsSection
            key = {channel.id}
            cName = {channel.name}
            logo = {channel.logo}
            href = {channel.href}
             />
        </ErrorBoundary>
    )
}


const ChannelsSectionContainer = () => {
    return (
        <section id="channels">
            <Container fluid >
            <h3 id="cta">You can listen to Larsxn's music on these streaming services.</h3>
                <div className="logo-box ">
                    <Row key = {channels.id}>
                    {channels.map(createChannels)}
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default ChannelsSectionContainer;