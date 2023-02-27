import Headline from "@/components/Headline";
import Calendar from "@/components/Calendar";
import Input from "@/components/Input";
import CycleLength from "@/components/CycleLength";
import {ChangeEvent, useEffect, useReducer} from "react";
import {formReducer, initialFormState, initialOutcomesState, outcomesReducer} from "@/reduceres";
import {calculateOutcomes, toFormatted, toNumber} from "@/utils";
import {isValid} from "date-fns";
import Button from "@/components/Button";
import Outcomes from "@/components/Outcomes";

const Calculator = () => {
  const [form, dispatchForm] = useReducer(formReducer, initialFormState)
  const [outcomes, dispatchOutcomes] = useReducer(outcomesReducer, initialOutcomesState)
  const {lastPeriod, cycleLength} = form
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    const updatedValue = name === 'cycle_length' ? toNumber(value) : value
    dispatchForm({
      type: 'SET_' + name.toUpperCase(),
      payload: updatedValue
    })
  }
  const onCalendar = (date: string | Date) => {
    if (isValid(new Date(date))) {
      dispatchForm({
        type: 'SET_LAST_PERIOD',
        payload: new Date(date)
      })
    }
  }

  const onQuickSelection = (cycleLength: number) => {
    dispatchForm({
      type: 'SET_CYCLE_LENGTH',
      payload: cycleLength
    })
  }

  const handleReset = () => {
    dispatchForm({
      type: 'RESET'
    })
  }

  useEffect(() => {
    if(!lastPeriod || !cycleLength) return
    dispatchOutcomes({
      type: 'SET_OUTCOMES',
      payload: calculateOutcomes(lastPeriod, cycleLength)
    })
  }, [lastPeriod, cycleLength])
  return (
      <div className='my-10 md:col-span-2'>
        <div className="space-y-6 bg-white">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <div className="shadow rounded-lg p-3 md:p-6 sm:p-4">
                <Headline primary='Last Period'
                          secondary='Choose the starting date of your most recent menstrual cycle.'/>
                <div className="mt-6">
                  {/*@ts-ignore*/}
                  <Calendar onChange={onCalendar} selected={lastPeriod && toFormatted(lastPeriod)}/>
                </div>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-2">
              <div className="shadow rounded-lg p-3 md:p-6 sm:p-4">
                <Headline primary='Cycle Length' secondary='Enter the number of days in your menstrual cycle.'/>
                <div className="mt-6">
                  <Input name='cycle_length' onChange={onChange} value={cycleLength}/>
                  <CycleLength onQuickSelection={onQuickSelection}/>
                </div>
              </div>
              <div className="shadow rounded-lg p-3 md:p-6 sm:p-4">
                <Headline primary='Start over'
                          secondary='Reset the form with ease and begin anew with just one simple click.'/>
                <div className="mt-4">
                  <Button onClick={handleReset} disabled={!lastPeriod && !cycleLength}>Start Over</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            {outcomes && lastPeriod && cycleLength && <Outcomes {...outcomes} />}
          </div>
        </div>
      </div>
  );
};

export default Calculator;
