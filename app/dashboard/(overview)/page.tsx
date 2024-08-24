import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { vazirmatn } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';

import {
    fetchCardData,
} from '@/app/lib/data';

export default async function Page() {
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();
    return (
        <main>
            <h1 className={`${vazirmatn.className} mb-4 text-xl md:text-2xl`}>
                داشبورد
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="مجموع دآمد" value={totalPaidInvoices} type="collected" />
                <Card title="در انتظار" value={totalPendingInvoices} type="pending" />
                <Card title="تعداد فاکتور ها" value={numberOfInvoices} type="invoices" />
                <Card
                    title="تعداد مشتریان"
                    value={numberOfCustomers}
                    type="customers"
                />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
            </div>
        </main>
    );
}