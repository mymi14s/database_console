import frappe


@frappe.whitelist()
def clear_emails_and_errors():
    frappe.db.sql("""TRUNCATE TABLE `tabEmail Queue`;""")
    frappe.db.sql("""TRUNCATE TABLE `tabEmail Queue Recipient`;""")
    frappe.db.sql("""TRUNCATE TABLE `tabError Log`;""")
    return "Email Queues and Error Logs cleared successfully."