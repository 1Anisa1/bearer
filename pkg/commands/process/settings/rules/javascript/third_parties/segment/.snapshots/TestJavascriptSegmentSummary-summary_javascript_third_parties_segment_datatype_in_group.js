critical:
    - rule_dsrid: DSR-1
      rule_display_id: javascript_third_parties_segment
      rule_description: Do not send sensitive data to Segment.
      rule_documentation_url: https://curio.sh/reference/rules/javascript_third_parties_segment
      line_number: 8
      filename: pkg/commands/process/settings/rules/javascript/third_parties/segment/testdata/datatype_in_group.js
      category_groups:
        - PII
      parent_line_number: 6
      parent_content: |-
        analytics.group({
          userId: user.id,
          groupId: user.job_title,
          traits: {},
        })


--
