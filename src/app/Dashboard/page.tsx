import {Button} from '@/components'
import Page from '@/app/Login'
import AnaButton from '@/components/AnaButton'

// import BrButton from '@/components/BrButton'

export default function DashboardPage() {
  return (
    <>
      <Page />
      <Button />

      {/*<div className="p-3">*/}
      {/*  <BrButton variant={'primary'} className="m-2">*/}
      {/*    Primary*/}
      {/*  </BrButton>*/}
      {/*  <BrButton variant={'danger'} disabled>*/}
      {/*    Danger*/}
      {/*  </BrButton>*/}
      {/*  <BrButton variant={'warning'} className="m-2">*/}
      {/*    Warning*/}
      {/*  </BrButton>*/}
      {/*  <BrButton variant={'success'} className="m-2">*/}
      {/*    Success*/}
      {/*  </BrButton>*/}
      {/*  <button className="br-button secondary margin: 25px" type="button">*/}
      {/*    Secundário*/}
      {/*  </button>*/}
      {/*  <button className="br-button" type="button">*/}
      {/*    Terciário*/}
      {/*  </button>*/}
      {/*</div>*/}
      <AnaButton className={'danger'} />
    </>
  )
}
