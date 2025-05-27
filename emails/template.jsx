import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const PREVIEW_DATA = {
  monthlyReport: {
    userName: "John Doe",
    type: "monthly-report",
    data: {
      month: "December",
      stats: {
        totalIncome: 5000,
        totalExpenses: 3500,
        byCategory: {
          housing: 1500,
          groceries: 600,
          transportation: 400,
          entertainment: 300,
          utilities: 700,
        },
      },
      insights: [
        "Your housing expenses are 43% of your total spending - consider reviewing your housing costs.",
        "Great job keeping entertainment expenses under control this month!",
        "Setting up automatic savings could help you save 20% more of your income.",
      ],
    },
  },
  budgetAlert: {
    userName: "John Doe",
    type: "budget-alert",
    data: {
      percentageUsed: 85,
      budgetAmount: 4000,
      totalExpenses: 3400,
    },
  },
};

export default function EmailTemplate({
  userName = "",
  type = "monthly-report",
  data = {},
}) {
  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>Monthly Financial Report</Heading>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              Here's your financial summary for {data?.month}:
            </Text>

            <Section style={styles.grid3}>
              <Stat label="Total Income" value={data?.stats?.totalIncome} />
              <Stat label="Total Expenses" value={data?.stats?.totalExpenses} />
              <Stat
                label="Net"
                value={
                  (data?.stats?.totalIncome || 0) -
                  (data?.stats?.totalExpenses || 0)
                }
              />
            </Section>

            {data?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Expenses by Category</Heading>
                {Object.entries(data?.stats.byCategory).map(
                  ([category, amount]) => (
                    <div key={category} style={styles.row}>
                      <Text style={styles.text}>{category}</Text>
                      <Text style={styles.text}>
                        ₹{(amount ?? 0).toFixed(2)}
                      </Text>
                    </div>
                  )
                )}
              </Section>
            )}

            {data?.insights && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Finly Insights</Heading>
                {data.insights.map((insight, index) => (
                  <Text key={index} style={styles.bullet}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            <Text style={styles.footer}>
              Thank you for using Finly. Keep tracking your finances for better
              financial health!
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  if (type === "budget-alert") {
    return (
      <Html>
        <Head />
        <Preview>Budget Alert</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>Budget Alert</Heading>
            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              You have used {(data?.percentageUsed ?? 0).toFixed(1)}% of your
              monthly budget.
            </Text>
            <Section style={styles.grid3}>
              <Stat label="Budget Amount" value={data?.budgetAmount} />
              <Stat label="Spent So Far" value={data?.totalExpenses} />
              <Stat
                label="Remaining"
                value={(data?.budgetAmount || 0) - (data?.totalExpenses || 0)}
              />
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }
}

function Stat({ label, value }) {
  return (
    <div style={styles.statBox}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>₹{(value ?? 0).toFixed(2)}</Text>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: "#f0f4f8",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    padding: "40px 0",
  },
  container: {
    backgroundColor: "#ffffff",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  },
  title: {
    color: "#1f2937",
    fontSize: "28px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "24px",
  },
  heading: {
    color: "#111827",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
  },
  text: {
    color: "#374151",
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "16px",
  },
  bullet: {
    color: "#374151",
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "12px",
    paddingLeft: "10px",
  },
  section: {
    marginTop: "32px",
    padding: "24px",
    backgroundColor: "#f9fafb",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    margin: "32px 0",
  },
  statBox: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
    textAlign: "center",
  },
  statLabel: {
    color: "#6b7280",
    fontSize: "14px",
    marginBottom: "8px",
  },
  statValue: {
    color: "#111827",
    fontSize: "20px",
    fontWeight: "700",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #e5e7eb",
  },
  footer: {
    color: "#6b7280",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "40px",
    paddingTop: "16px",
    borderTop: "1px solid #e5e7eb",
  },
};
