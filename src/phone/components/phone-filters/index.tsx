import { Col, Form, Row } from 'antd';
import React, { FunctionComponent, memo, useCallback } from 'react';

import { manufacturerOptions, operationSystemOptions } from 'consts';
import { Button, FormItem } from 'layout';
import { PhoneFiltersType } from 'phone/types/phone-filters';

interface Props {
    setNewFilters: (filters: PhoneFiltersType) => void;
}

const PhoneFiltersBase: FunctionComponent<Props> = (props) => {
  const { setNewFilters } = props;

  const [form] = Form.useForm();

  const clearFilters = useCallback(() => {
    setNewFilters({});
    form.resetFields();
  }, [form, setNewFilters]);

  return (
    <Form<PhoneFiltersType>
      form={form}
      onFinish={setNewFilters}
      layout="horizontal"
      className="pb-2 pb-md-0"
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={5} xl={5}>
          <FormItem
            label="System"
            name="os"
            type="select"
            options={operationSystemOptions}
            clearable
          />
        </Col>

        <Col xs={24} md={12} lg={6} xl={5}>
          <FormItem
            label="Manufacuter"
            name="vendor"
            type="select"
            options={manufacturerOptions}
            clearable
          />
        </Col>

        <Col xs={24} md={6} lg={3}>
          <FormItem
            label="Only available"
            name="onlyAvailable"
            type="checkbox"
          />
        </Col>

        <Col xs={24} md={12} lg={6} xl={5}>
          <FormItem
            label="Model"
            name="model"
          />
        </Col>

        <Col xs={12} md={3} lg={2} xl={3}>
          <Button
            htmlType="submit"
            fullWidth
          >
            Filter
          </Button>
        </Col>
        <Col xs={12} md={3} lg={2} xl={3}>
          <Button
            type="default"
            fullWidth
            onClick={clearFilters}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export const PhoneFilters = memo(PhoneFiltersBase);
