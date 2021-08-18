import React from "react";
import { Button, Htag, P, Taq } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Some text</Htag>

      <Button appearance="primary" arrow="right">
        Button
      </Button>

      <Button appearance="ghost" arrow="down">
        Button another
      </Button>

      <P size='l'>Large</P>
      <P size='m'>Medium</P>
      <P size='s'>Small</P>

      <Taq size='s'>Ghds</Taq>
      <Taq size='m' color='red'>123</Taq>
      <Taq size='s' color='green'>dddfwe</Taq>
      <Taq color='primary'>FRds</Taq>


    </div>
  );
}
