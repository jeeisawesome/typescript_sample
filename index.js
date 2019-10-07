import { select, csv, scaleLinear, max, scaleBand } from 'https://unpkg.com/d3?module'
import {randomizer} from './data.js'

const svg = select('svg')
const width = +svg.attr('width')
const height = +svg.attr('height')

const random = randomizer();
const render = data => {
    const xScale = scaleLinear()
        .domain([0, max(data, d => d.population)])
        .range([0, width])

    const yScale = scaleBand()
        .domain(data.map(d => d.country))
            .range([0, height])

    svg.selectAll('rect').data(data)
        .enter().append('rect')
            .attr('y', d => yScale(d.country))
            .attr('width', d => xScale(d.population))
            .attr('height', yScale.bandwidth())
}

csv('data.csv').then(data => {
    data.forEach(element => {
        element.population = +element.population * 1000  
    });
    render(data)
})