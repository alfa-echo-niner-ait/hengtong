'use client'
import CountUp from 'react-countup'

export default function StatsSection() {
	return (
		<section className="py-6 md:py-10">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
					<h2 className="text-4xl font-medium lg:text-5xl">
						Hengtong in Numbers
					</h2>
					<p>We provide the best service for our clients</p>
				</div>

				<div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
					<div className="space-y-4">
						<div className="text-primary/85 text-5xl font-bold">
							<CountUp
								end={20}
								duration={3}
								prefix="+"
								enableScrollSpy
								scrollSpyOnce
							/>
						</div>
						<p>Years of Manufacturing Experience</p>
					</div>
					<div className="space-y-4">
						<div className="text-primary/85 text-5xl font-bold">
							<CountUp
								end={420}
								duration={3}
								prefix="+"
								enableScrollSpy
								scrollSpyOnce
							/>
						</div>
						<p>Customers Over the World</p>
					</div>
					<div className="space-y-4">
						<div className="text-primary/85 text-5xl font-bold">
							<CountUp
								end={30}
								duration={3}
								prefix="+"
								enableScrollSpy
								scrollSpyOnce
							/>
						</div>
						<p>Countries We have Exported</p>
					</div>
				</div>
			</div>
		</section>
	);
}
