import {calculateTrendPercentage, cn} from "~/lib/utils";
import {
    Category,
    ChartComponent,
    Inject,
    LineSeries,
    SeriesCollectionDirective, SeriesDirective,
    Tooltip
} from "@syncfusion/ej2-react-charts";

const StatsCard = ({ headerTitle, total, currentMonthCount, lastMonthCount }: StatsCard) => {
    const { trend, percentage } = calculateTrendPercentage(currentMonthCount, lastMonthCount)
    const isDecrement = trend === 'decrement'
    const chartData = [
        { month: 'Last Month', count: lastMonthCount },
        { month: 'Current Month', count: currentMonthCount }
    ]
    const lineColor = currentMonthCount >= lastMonthCount ? '#008000' : '#FF0000';

    return (
        <article className='stats-card'>
            <h3 className='text-base font-medium'>
                {headerTitle}
            </h3>
            <div className='content'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-4xl font-semibold'>{total}</h2>
                    <div className='flex items-center gap-2'>
                        <figure className='flex items-center gap-1'>
                            <img
                                className='size-5'
                                src={`/assets/icons/${isDecrement ? 'arrow-down-red.svg' : 'arrow-up-green.svg'}`}
                                alt='arrow'
                            />
                            <figcaption className={cn('text-sm font-medium', isDecrement ? 'text-red-500' : 'text-success-700')}>
                                {Math.round(percentage)}%
                            </figcaption>
                        </figure>
                        <p className='text-sm font-medium text-gray-100 truncate'>
                           vs last month
                        </p>
                    </div>
                </div>
                <div className='xl:w-32 w-full h-full md:h-32 xl-h-full'>
                    <ChartComponent
                        id={`Line-chart-${headerTitle.replace(/\s/g, '')}`}
                        width='100%'
                        height='50px'
                        chartArea={{ border: { width: 0 } }}
                        primaryXAxis={{ valueType: 'Category', visible: false, majorGridLines: { width: 0 } }}
                        primaryYAxis={{ labelFormat: '{value}', visible: false, majorGridLines: { width: 0 } }}
                        tooltip={{ enable: false }}
                        title=''
                    >
                        <Inject services={[LineSeries, Category, Tooltip]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective
                                dataSource={chartData}
                                xName='month'
                                yName='count'
                                type='Line'
                                name={headerTitle}
                                marker={{ visible: false }}
                                fill={lineColor}
                            />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
                {/*<img*/}
                {/*    src={`/assets/icons/${isDecrement ? 'decrement.svg' : 'increment.svg'}`}*/}
                {/*    className='xl:w-32 w-full h-full md:h-32 xl-h-full'*/}
                {/*/>*/}
            </div>
        </article>
    )
}
export default StatsCard
