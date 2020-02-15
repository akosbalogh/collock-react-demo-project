import React, {useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Job} from "./types";
import LinearProgress from "@material-ui/core/LinearProgress";
import {OpenInBrowser} from "@material-ui/icons";

type JobListingProps ={
     searchQuery?: string ;
}

const JobListing = ({searchQuery=''}: JobListingProps)=>{
    const [loading, setLoading] = React.useState<boolean>(true);
    const [jobs, setJobs] = React.useState<Job[]>([]);
    useEffect(
        ()=>{
            setLoading(true);
            setJobs([]);
            fetch(`${process.env.REACT_APP_API_URL}?description=${searchQuery}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(res=>res.json()).then(jobs=>{
                setJobs(jobs);
                setLoading(false);
            }).catch(err =>{
              alert('Github Jobs API failed to load');
              console.error(err);
            });
        },[searchQuery]);
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Company</TableCell>
                        <TableCell align="right">Location</TableCell>
                        <TableCell align="right"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jobs.map((job: Job) => (
                        <TableRow key={job.id}>
                            <TableCell component="th" scope="row">
                                {job.title}
                            </TableCell>
                            <TableCell align="right">{job.type}</TableCell>
                            <TableCell align="right">{job.company}</TableCell>
                            <TableCell align="right">{job.location}</TableCell>
                            <TableCell align="right"><a target="_blank" rel="noopener noreferrer" href={job.url}><OpenInBrowser/></a></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {loading && <LinearProgress variant="query"/>}

        </TableContainer>
    );
};
export default JobListing;