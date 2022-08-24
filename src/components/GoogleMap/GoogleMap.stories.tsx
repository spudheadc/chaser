import React from 'react'
import {GoogleMap} from "./GoogleMap";
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';

export default {
     title: 'GoogleMap',
     component: GoogleMap
} as ComponentMeta<typeof GoogleMap>

const Template: ComponentStory<typeof GoogleMap> = (args:any) => <GoogleMap {...args} style={{width:"800px", height:"800px"}}/>;

export const GoogleMapBasic = Template.bind({});
GoogleMapBasic.args = {
}
